from app import app
from app.models import Topik, TopikSchema, Skripsi, SkripsiSchema
from flask import Flask, jsonify, request
from sqlalchemy import func
import numpy as np
from sklearn import datasets, linear_model
from sklearn.metrics import mean_squared_error, r2_score


@app.route('/predict',methods=["GET"])
def predict():
    pre_X = []
    pre_y = []
    topiks = Topik.query.filter_by().all()
    for t in topiks:
        # print(t.id)
        cy = []
        for y in [2018, 2019, 2020, 2021]:
            c = Skripsi.query.filter_by(topik=t.id, tahun=y).count()
            ct = Skripsi.query.filter_by(topik=t.id).count()
            cy.append(c/ct)
        pre_X.append(cy)
        pre_y.append(t.id)
        
    print('-------')
    print(np.array(pre_X))
    print(np.array(pre_y))

    SPLIT = 2
    # Load the diabetes dataset
    # print(datasets.load_diabetes(return_X_y=True))
    # X, y = datasets.load_diabetes(return_X_y=True)
    # print(X)
    X = np.array(pre_X)
    y = np.array(pre_y)
    # Use only one feature
    X = X[:, np.newaxis, 2]

    # Split the data into training/testing sets
    X_train = X[:-SPLIT]
    X_test = X[-SPLIT:]

    # Split the targets into training/testing sets
    y_train = y[:-SPLIT]
    y_test = y[-SPLIT:]

    # Create linear regression object
    regr = linear_model.LinearRegression()

    # Train the model using the training sets
    regr.fit(X_train, y_train)

    # Make predictions using the testing set
    y_pred = regr.predict(X_test)

    mse =  mean_squared_error(y_test, y_pred)
    coeff = regr.coef_.tolist()
    coeff_det = r2_score(y_test, y_pred)

    return jsonify({"prediction": y_pred.tolist(),"MSE": mse, "COD": coeff_det, "coeff": coeff,  "X": pre_X, "y": pre_y}),200