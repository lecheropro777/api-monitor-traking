"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GuardarVisitasController = void 0;
const common_1 = require("@nestjs/common");
const guardar_visitas_service_1 = require("./guardar-visitas.service");
const useragent = require("useragent");
let GuardarVisitasController = class GuardarVisitasController {
    constructor(guardarVisitasService) {
        this.guardarVisitasService = guardarVisitasService;
    }
    guardar(req, tokenReq) {
        console.log(tokenReq.token);
        const clientIP = req.ip || req.connection.remoteAddress;
        const ipv4Address = clientIP.includes('::ffff:') ? clientIP.split(':').pop() : clientIP;
        const userAgentString = req.headers['user-agent'];
        const userAgent = useragent.parse(userAgentString);
        const deviceType = userAgent.isMobile ? 'Móvil' : 'Escritorio';
        const operatingSystem = userAgent.os.toString();
        const datos = {
            direccionIP: ipv4Address,
            dispositivo: deviceType,
            sistema_operativo: operatingSystem,
        };
        return this.guardarVisitasService.guardarVisita(datos, tokenReq);
    }
};
exports.GuardarVisitasController = GuardarVisitasController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], GuardarVisitasController.prototype, "guardar", null);
exports.GuardarVisitasController = GuardarVisitasController = __decorate([
    (0, common_1.Controller)('guardar-visitas'),
    __metadata("design:paramtypes", [guardar_visitas_service_1.GuardarVisitasService])
], GuardarVisitasController);
//# sourceMappingURL=guardar-visitas.controller.js.map