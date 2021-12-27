from app import app
from app.models import Prodi, ProdiSchema
from flask import Flask, jsonify, request

@app.route('/prodi',methods=["GET"])
def prodiGetAll():
    page = request.args.get('page') or 1
    limit = request.args.get('limit') or 10
    prodi_object = Prodi.query.paginate(page=int(page), per_page=int(limit), error_out=False).items
    schema = ProdiSchema(many=True)  
    prodi = schema.dump(prodi_object)
    return jsonify(prodi),200

@app.route('/prodi/count',methods=["GET"])
def prodiCount():
    data = Prodi.query.filter_by().count()
    return jsonify({'count': data}),200

@app.route('/prodi/<id>',methods=["GET"])
def prodiGetById(id):
    prodi_object = Prodi.query.filter_by(id=id).first()
    schema = ProdiSchema(many=False)  
    prodi = schema.dump(prodi_object)
    return jsonify(prodi),200

@app.route('/prodi/<id>',methods=["PUT"])
def prodiUpdateById(id):
   
    found = Prodi.query.filter_by(id=id)
    if not found.first():
        return jsonify({ 'message': f'prodi with id {id} not found'}), 404
    
    body = request.get_json()
    nama = body['nama']

    Prodi.query.filter_by(id=id).update(dict(nama=nama))
    Prodi.query.session.commit()
    
    schema = ProdiSchema(many=False)  
    prodi = schema.dump(found.first())
    return jsonify(prodi),200

@app.route('/prodi',methods=["POST"])
def prodiCreate():
    body = request.get_json()
    
    nama = body['nama']
    row = Prodi(None, nama)
    Prodi.query.session.add(row)
    Prodi.query.session.commit()

    prodi_object = Prodi.query.filter_by(nama=nama).first()
    schema = ProdiSchema(many=False)  
    prodi = schema.dump(prodi_object)
    return jsonify(prodi),200

@app.route('/prodi/<id>',methods=["DELETE"])
def prodiRemoveById(id):
    found = Prodi.query.filter_by(id=id)
    if not found.first():
        return jsonify({ 'message': f'prodi with id {id} not found'}), 404
    found.delete()
    found.session.commit()
    return jsonify(found.first()),200


