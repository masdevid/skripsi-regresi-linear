from app import app
from app.models import Mahasiswa, MahasiswaSchema
from flask import Flask, jsonify, request

@app.route('/mahasiswa',methods=["GET"])
def mahasiswaGetAll():
    page = request.args.get('page') or 1
    limit = request.args.get('limit') or 10
    mahasiswa_object = Mahasiswa.query.paginate(page=int(page), per_page=int(limit), error_out=False).items
    schema = MahasiswaSchema(many=True)  
    mahasiswa = schema.dump(mahasiswa_object)
    return jsonify(mahasiswa),200

@app.route('/mahasiswa/<id>',methods=["GET"])
def mahasiswaGetById(id):
    mahasiswa_object = Mahasiswa.query.filter_by(id=id).first()
    schema = MahasiswaSchema(many=False)  
    mahasiswa = schema.dump(mahasiswa_object)
    return jsonify(mahasiswa),200
    
@app.route('/mahasiswa/count',methods=["GET"])
def mahasiswaCount():
    data = Mahasiswa.query.filter_by().count()
    return jsonify({'count': data}),200

@app.route('/mahasiswa/<id>',methods=["PUT"])
def mahasiswaUpdateById(id):    
   
    found = Mahasiswa.query.filter_by(id=id)
    if not found.first():
        return jsonify({ 'message': f'mahasiswa with id {id} not found'}), 404
    
    body = request.get_json()
    nama = body['nama']
    nim = body['nim']
    prodi = body['prodi']

    Mahasiswa.query.filter_by(id=id).update(dict(nama=nama, nim=nim, prodi=prodi))
    Mahasiswa.query.session.commit()
    
    schema = MahasiswaSchema(many=False)  
    mahasiswa = schema.dump(found.first())
    return jsonify(mahasiswa),200

@app.route('/mahasiswa',methods=["POST"])
def mahasiswaCreate():
    body = request.get_json()
    
    nama = body['nama']
    nim = body['nim']
    prodi = body['prodi']
    row = Mahasiswa(None, nama, nim, prodi)
    Mahasiswa.query.session.add(row)
    Mahasiswa.query.session.commit()

    mahasiswa_object = Mahasiswa.query.filter_by(nama=nama).first()
    schema = MahasiswaSchema(many=False)  
    mahasiswa = schema.dump(mahasiswa_object)
    return jsonify(mahasiswa),200

@app.route('/mahasiswa/<id>',methods=["DELETE"])
def mahasiswaRemoveById(id):
    found = Mahasiswa.query.filter_by(id=id)
    if not found.first():
        return jsonify({ 'message': f'mahasiswa with id {id} not found'}), 404
    found.delete()
    found.session.commit()
    return jsonify(found.first()),200


