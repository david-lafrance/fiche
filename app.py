from flask import Flask, render_template, request, jsonify
import sqlite3

app = Flask(__name__)
DB_PATH = "database/data.db"

# Initialisation de la base de données
@app.route("/init_db")
def init_db():
    conn = sqlite3.connect(DB_PATH)
    cursor = conn.cursor()
    cursor.execute("""
        CREATE TABLE IF NOT EXISTS characters (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT,
            class TEXT,
            level INTEGER,
            strength INTEGER,
            dexterity INTEGER,
            constitution INTEGER,
            intelligence INTEGER,
            wisdom INTEGER,
            charisma INTEGER,
            size TEXT,
            hp INTEGER,
            hp_dice INTEGER,
            attack_bonus INTEGER
        )
    """)
    cursor.execute("""
    CREATE TABLE IF NOT EXISTS mods (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        id_character INTEGER,
        name TEXT,
        type TEXT,
        value TEXT,
        status TEXT
        )
    """)
    conn.commit()
    conn.close()

@app.route("/delete_table")
def supr_db():
    conn = sqlite3.connect(DB_PATH)
    cursor = conn.cursor()
    cursor.execute("""
        DROP TABLE characters
    """)
    cursor.execute("""
        DROP TABLE mods
    """)
    conn.commit()
    conn.close()


@app.route("/")
def index():
    return render_template("index.html")


@app.route("/save_character", methods=["POST"])
def save_character():
    try:
        data = request.json  # récupérer les données JSON
        # Validation des données
        required_fields = ["name", "classe", "level", "strength", "dexterity", "constitution",
                           "intelligence", "wisdom", "charisma", "size", "hp", "hp_dice", "attack_bonus"]
        for field in required_fields:
            if field not in data:
                return jsonify({"status": "error", "message": f"Missing field: {field}"}), 400

        # Connexion à la base de données
        conn = sqlite3.connect(DB_PATH)
        cursor = conn.cursor()
        cursor.execute("""
            INSERT INTO characters
            (name, class, level, strength, dexterity, constitution, intelligence, wisdom, charisma, size, hp, hp_dice, attack_bonus)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        """, (
            data["name"], data["classe"], data["level"], data["strength"], data["dexterity"],
            data["constitution"], data["intelligence"], data["wisdom"], data["charisma"],
            data["size"], data["hp"], data["hp_dice"], data["attack_bonus"]
        ))
        conn.commit()
        conn.close()

        return jsonify({"status": "success"}), 200

    except Exception as e:
        return jsonify({"status": "error", "message": str(e)}), 500


@app.route("/characters")
def get_characters():
    try:
    # Récupération des personnages
        conn = sqlite3.connect(DB_PATH)
        cursor = conn.cursor()
        cursor.execute("SELECT * FROM characters")
        characters = cursor.fetchall()
        conn.close()

    # Debugging : afficher les données récupérées
        print("Personnages recuperes :", characters)

        characters_list = []
        for character in characters:
            characters_list.append({
                "id": character[0],
                "name": character[1],
                "classe": character[2],
                "level": character[3],
                "strength": character[4],
                "dexterity": character[5],
                "constitution": character[6],
                "intelligence": character[7],
                "wisdom": character[8],
                "charisma": character[9],
                "size": character[10],
                "hp": character[11],
                "hp_dice": character[12],
                "attack_bonus": character[13]
            })

        return jsonify(characters_list), 200

    except Exception as e:
        print("Erreur lors de la récupération des personnages :", e)
        return jsonify({"status": "error", "message": str(e)}), 500

@app.route("/delete_character", methods=["POST"])
def delete_character():
    data = request.json
    character_id = data.get("id")

    if character_id is not None:
        conn = sqlite3.connect(DB_PATH)
        cursor = conn.cursor()
        cursor.execute("DELETE FROM characters WHERE id = ?", (character_id,))
        cursor.execute("DELETE FROM mods WHERE id_character = ?", (character_id,))
        conn.commit()
        conn.close()
        return jsonify({"status": "success"})

    return jsonify({"status": "error", "message": "ID manquant"}), 400

@app.route("/modify_character/<int:character_id>", methods=["POST"])
def modify_character(character_id):
    try:
        data = request.json

        if "stat" not in data or "value" not in data:
            return jsonify({"status": "error", "message": "Missing field"}), 400

        valid_columns = {"name", "class", "level", "strength", "dexterity", "constitution",
                         "intelligence", "wisdom", "charisma", "size", "hp", "hp_dice", "attack_bonus"}

        if data["stat"] not in valid_columns:
            return jsonify({"status": "error", "message": "Invalid field"}), 400

        conn = sqlite3.connect(DB_PATH)
        cursor = conn.cursor()

        query = f"UPDATE characters SET {data['stat']} = ? WHERE id = ?"
        cursor.execute(query, (data["value"], character_id))

        conn.commit()
        conn.close()

        return jsonify({"status": "success"}), 200

    except Exception as e:
        return jsonify({"status": "error", "message": str(e)}), 500



@app.route("/character/<int:character_id>", methods=["GET"])
def get_character(character_id):
    try:
        conn = sqlite3.connect(DB_PATH)
        cursor = conn.cursor()
        cursor.execute("SELECT * FROM characters WHERE id = ?", (character_id,))
        character = cursor.fetchone()
        conn.close()

        if character:
            return jsonify({
                "id": character[0],
                "name": character[1],
                "classe": character[2],
                "level": character[3],
                "strength": character[4],
                "dexterity": character[5],
                "constitution": character[6],
                "intelligence": character[7],
                "wisdom": character[8],
                "charisma": character[9],
                "size": character[10],
                "hp": character[11],
                "hp_dice": character[12],
                "attack_bonus": character[13]
            }), 200
        else:
            return jsonify({"status": "error", "message": "Character not found"}), 404

    except Exception as e:
        return jsonify({"status": "error", "message": str(e)}), 500



#OPERATIONS SUR LES MODIFICATEURS_______________________________________________

@app.route("/save_mods", methods=["POST"])
def save_mods():
    try:
        data = request.json
        required_fields = ["id_character","name", "type", "value", "status"]
        for field in required_fields:
            if field not in data:
                return jsonify({"status": "error", "message": f"Missing field: {field}"}), 400

        conn = sqlite3.connect(DB_PATH)
        cursor = conn.cursor()
        cursor.execute("""
            INSERT INTO mods
            (id_character, name, type, value, status)
            VALUES (?, ?, ?, ?, ?)
        """, (
            data["id_character"], data['name'], data["type"], data["value"], data["status"]
        ))
        conn.commit()
        conn.close()

        return jsonify({"status": "success"}), 200

    except Exception as e:
        return jsonify({"status": "error", "message": str(e)}), 500


@app.route("/mods/<int:character_id>", methods=["GET"])
def get_mods(character_id):
    try:
        conn = sqlite3.connect(DB_PATH)
        cursor = conn.cursor()
        cursor.execute("SELECT * FROM mods WHERE id_character = ?", (character_id,))
        mods = cursor.fetchall()
        conn.close()

        if mods:
            return jsonify([
                {
                    "id": mod[0],
                    "id_character": mod[1],
                    "name": mod[2],
                    "type": mod[3],
                    "value": mod[4],
                    "status": mod[5]
                } for mod in mods
            ]), 200
        else:
            return jsonify([]), 200

    except Exception as e:
        return jsonify({"status": "error", "message": str(e)}), 500


@app.route("/delete_mod/<int:mod_id>", methods=["DELETE"])
def delete_mod(mod_id):
    try:
        conn = sqlite3.connect(DB_PATH)
        cursor = conn.cursor()
        cursor.execute("DELETE FROM mods WHERE id = ?", (mod_id,))
        conn.commit()
        conn.close()
        return jsonify({"status": "success"})
    except Exception as e:
        return jsonify({"status": "error", "message": str(e)}), 500



@app.route("/search_mod_status/<int:mod_id>")
def search_mod_status(mod_id):
    try:
        conn = sqlite3.connect(DB_PATH)
        cursor = conn.cursor()
        cursor.execute("SELECT status FROM mods WHERE id = ?", (mod_id,))
        mod_status = cursor.fetchone()

        conn.close()

        if mod_status:
            return jsonify({"status": mod_status[0]})
        else:
            return jsonify({"status": "error", "message": "Mod not found"}), 404

    except Exception as e:
        return jsonify({"status": "error", "message": str(e)}), 500


@app.route("/toggle_mod/<int:mod_id>/<string:new_status>", methods=["POST"])
def toggle_mod(mod_id, new_status):
    try:
        conn = sqlite3.connect(DB_PATH)
        cursor = conn.cursor()
        cursor.execute("UPDATE mods SET status = ? WHERE id = ?", (new_status, mod_id,))
        conn.commit()
        conn.close()
        return jsonify({"status": "success"})
    except Exception as e:
        return jsonify({"status": "error", "message": str(e)}), 500


#Programme Principal____________________________________________________________

if __name__ == "__main__":
    init_db()
    app.run(debug=True)


if __name__ == "__main__":
    init_db()
    app.run(debug=True)
