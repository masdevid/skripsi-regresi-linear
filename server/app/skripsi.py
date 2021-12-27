from app import app
from app.models import Skripsi, SkripsiSchema
from flask import jsonify, request

@app.route('/skripsi',methods=["GET"])
def skripsiGetAll():
    page = request.args.get('page') or 1
    limit = request.args.get('limit') or 10
    skripsi_object = Skripsi.query.paginate(page=int(page), per_page=int(limit), error_out=False).items if int(limit) > 0 else Skripsi.query.filter_by().all()
    schema = SkripsiSchema(many=True)  
    skripsi = schema.dump(skripsi_object)
    return jsonify(skripsi),200

@app.route('/skripsi/count',methods=["GET"])
def skripsiCount():
    skripsi = Skripsi.query.filter_by().count()
    return jsonify({'count': skripsi}),200

@app.route('/skripsi/<id>',methods=["GET"])
def skripsiGetById(id):
    skripsi_object = Skripsi.query.filter_by(id=id).first()
    schema = SkripsiSchema(many=False)  
    skripsi = schema.dump(skripsi_object)
    return jsonify(skripsi),200

@app.route('/skripsi/<id>',methods=["PUT"])
def skripsiUpdateById(id):
   
    found = Skripsi.query.filter_by(id=id)
    if not found.first():
        return jsonify({ 'message': f'skripsi with id {id} not found'}), 404
    
    body = request.get_json()
    judul = body['judul']
    topik = body['topik']
    nim = body['nim']
    prodi = body['prodi']
    tahun = body['tahun']

    Skripsi.query.filter_by(id=id).update(dict(judul=judul, topik=topik, nim=nim, prodi=prodi, tahun=tahun))
    Skripsi.query.session.commit()
    
    schema = SkripsiSchema(many=False)  
    skripsi = schema.dump(found.first())
    return jsonify(skripsi),200

@app.route('/skripsi',methods=["POST"])
def skripsiCreate():
    body = request.get_json()
    
    judul = body['judul']
    topik = body['topik']
    nim = body['nim']
    prodi = body['prodi']
    tahun = body['tahun']

    row = Skripsi(None, judul, topik, nim, prodi, tahun)
    Skripsi.query.session.add(row)
    Skripsi.query.session.commit()

    skripsi_object = Skripsi.query.filter_by(nim=nim).first()
    schema = SkripsiSchema(many=False)  
    skripsi = schema.dump(skripsi_object)
    return jsonify(skripsi),200

@app.route('/skripsi/<id>',methods=["DELETE"])
def skripsiRemoveById(id):
    found = Skripsi.query.filter_by(id=id)
    if not found.first():
        return jsonify({ 'message': f'skripsi with id {id} not found'}), 404
    found.delete()
    found.session.commit()
    return jsonify(found.first()),200


