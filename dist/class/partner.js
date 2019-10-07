"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = require("../utils/http");
class Partner {
    constructor() {
    }
    findOne(partnerId) {
        const url = `http://${process.env.PARTNER_SERVICE_URL}:3000/${partnerId}`;
        return http_1.default({
            url: url,
            method: 'GET'
        })
            .then((response) => {
            const { data, status = '', statusText = '' } = response;
            if (data.success) {
                return data.data;
            }
            return {};
        });
    }
}
exports.default = Partner;