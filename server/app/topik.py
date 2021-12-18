from app import app
from app.models import Topik, TopikSchema
from flask import Flask, jsonify, request

@app.route('/topik',methods=["GET"])
def topikGetAll():
    page = request.args.get('page') or 1
    limit = request.args.get('limit') or 10
    topik_object = Topik.query.paginate(page=int(page), per_page=int(limit), error_out=False).items
    schema = TopikSchema(many=True)  
    topik = schema.dump(topik_object)
    return jsonify(topik),200

@app.route('/topik/<id>',methods=["GET"])
def topikGetById(id):
    topik_object = Topik.query.filter_by(id=id).first()
    schema = TopikSchema(many=False)  
    topik = schema.dump(topik_object)
    return jsonify(topik),200

@app.route('/topik/<id>',methods=["PUT"])
def topikUpdateById(id):
   
    found = Topik.query.filter_by(id=id)
    if not found.first():
        return jsonify({ 'message': f'topik with id {id} not found'}), 404
    
    body = request.get_json()
    nama = body['nama']

    Topik.query.filter_by(id=id).update(dict(nama=nama))
    Topik.query.session.commit()
    
    schema = TopikSchema(many=False)  
    topik = schema.dump(found.first())
    return jsonify(topik),200

@app.route('/topik',methods=["POST"])
def topikCreate():
    body = request.get_json()
    
    nama = body['nama']
    row = Topik(None, nama)
    Topik.query.session.add(row)
    Topik.query.session.commit()

    topik_object = Topik.query.filter_by(nama=nama).first()
    schema = TopikSchema(many=False)  
    topik = schema.dump(topik_object)
    return jsonify(topik),200

@app.route('/topik/<id>',methods=["DELETE"])
def topikRemoveById(id):
    found = Topik.query.filter_by(id=id)
    if not found.first():
        return jsonify({ 'message': f'topik with id {id} not found'}), 404
    found.delete()
    found.session.commit()
    return jsonify(found.first()),200


