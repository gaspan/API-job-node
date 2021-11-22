const AppError = require('../utils/appError');
const APIFeatures = require('../utils/apiFeatures');
const axios = require('axios')
const User = require('../models/userModel');

exports.getOne = Model => async (req, res, next) => {
    try {

        axios.get('http://dev3.dansmultipro.co.id/api/recruitment/positions/' + req.params.id)
        .then(function (response) {
            console.log(response.data)

            res.status(200).json({
                status: 'success',
                data: {
                    data: response.data
                }
            });

        })
        .catch(function (error) {
            // handle error
            console.log(error);
            next(error);
        });


    } catch (error) {
        next(error);
    }
};

exports.getAll = Model => async (req, res, next) => {
    try {

        axios.get('http://dev3.dansmultipro.co.id/api/recruitment/positions.json')
        .then(function (response) {

            let data =response.data
            let description = req.query.description
            let location = req.query.location
            let type = (req.query.full_time == 'true') ? "Full Time" : req.query.full_time

            let data_type_filtered
            if (type == 'Full Time') {
                data_type_filtered = data.filter(function (str) { return str.type.includes(type); });                
            } else if(type == '') {
                data_type_filtered = data;
            } else if (type != 'Full Time') {
                data_type_filtered = data.filter(function (str) { return !str.type.includes(type); });
            }

            let data_description_filtered
            if (description != '') {
                data_description_filtered = data_type_filtered.filter(function (str) { return str.description.includes(description); });
            } else {
                data_description_filtered = data_type_filtered
            }

            let data_loc_filtered
            if (location != '') {
                data_loc_filtered = data_description_filtered.filter(function (str) { return str.location.includes(location); });
                
            } else {
                data_loc_filtered = data_description_filtered
            }

            let data_filtered = data_loc_filtered
            const data_proccessed = new APIFeatures(data_filtered, req.query)
                // .sort()
                .paginate();

            res.status(200).json({
                status: 'success',
                results: data_proccessed.length,
                data: {
                    data: data_proccessed
                }
            });

        })
        .catch(function (error) {
            // handle error
            console.log(error);
            next(error);
        });

    } catch (error) {
        next(error);
    }

};