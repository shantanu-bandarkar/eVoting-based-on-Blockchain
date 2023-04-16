const VoterModel = require('../models/voter');

const bcrypt = require('bcrypt');

const path = require('path');

const saltRounds = 10;

module.exports = {
	create: function (req, res, cb) {
		VoterModel.findOne(
			{ email: req.body.email, election_address: req.body.election_address },
			function (err, result) {
				if (err) {
					cb(err);
				} else {
					if (!result) {
						VoterModel.create(
							{
								email: req.body.email,
								password: req.body.email,
								election_address: req.body.election_address,
							},
							function (err, voter) {
								if (err) cb(err);
								else {
									console.log(voter);
									console.log(voter.email);
								}
							}
						);
					} else {
						res.json({ status: 'error', message: 'Voter already exists ', data: null });
					}
				}
			}
		);
	}

};
