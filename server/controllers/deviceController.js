const uuid = require("uuid");
const path = require("path");
const { Device, DeviceInfo } = require("../models/models");
const ApiError = require("../error/ApiError");

class DeviceController {
    async create(req, res, next) {}

    async getAll(req, res) {}

    async getOne(req, res) {}
}

module.exports = new DeviceController();
