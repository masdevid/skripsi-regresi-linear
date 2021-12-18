from app import app
from app.models import Topik, TopikSchema, Skripsi, SkripsiSchema
from flask import Flask, jsonify, request
from sqlalchemy import func
import numpy as np
from sklearn import datasets, linear_model
from sklearn.metrics import mean_squared_error, r2_score


@app.route('/predict',methods=["GET"])
def predict():
    topik_count = []
    topiks = Topik.query.filter_by().all()
    for t in topiks:
        print(t.id)
        rows = Skripsi.query.filter_by(topik=t.id).group_by(Skripsi.tahun).all()
        for y in rows:
            print(y.tahun)
    print(topik_count)
    SPLIT = 5
    # Load the diabetes dataset
    diabetes_X, diabetes_y = datasets.load_diabetes(return_X_y=True)

    # Use only one feature
    diabetes_X = diabetes_X[:, np.newaxis, 2]

    # Split the data into training/testing sets
    diabetes_X_train = diabetes_X[:-SPLIT]
    diabetes_X_test = diabetes_X[-SPLIT:]

    # Split the targets into training/testing sets
    diabetes_y_train = diabetes_y[:-SPLIT]
    diabetes_y_test = diabetes_y[-SPLIT:]

    # Create linear regression object
    regr = linear_model.LinearRegression()

    # Train the model using the training sets
    regr.fit(diabetes_X_train, diabetes_y_train)

    # Make predictions using the testing set
    diabetes_y_pred = regr.predict(diabetes_X_test)

    mse =  mean_squared_error(diabetes_y_test, diabetes_y_pred)
    coeff = regr.coef_.tolist()
    coeff_det = r2_score(diabetes_y_test, diabetes_y_pred)

    return jsonify({"coefficient": coeff, "diabetes_y_pred":diabetes_y_pred.tolist(),"mean_squared_error": mse, "coef_of_determination": coeff_det}),200