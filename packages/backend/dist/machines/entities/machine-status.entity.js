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
Object.defineProperty(exports, "__esModule", { value: true });
exports.MachineStatus = void 0;
const typeorm_1 = require("typeorm");
let MachineStatus = class MachineStatus {
    id;
    timestamp;
    state;
    temperature;
    rpm;
    uptime;
    efficiency;
    oeeOverall;
    oeeAvailability;
    oeePerformance;
    oeeQuality;
};
exports.MachineStatus = MachineStatus;
__decorate([
    (0, typeorm_1.PrimaryColumn)(),
    __metadata("design:type", String)
], MachineStatus.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], MachineStatus.prototype, "timestamp", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], MachineStatus.prototype, "state", void 0);
__decorate([
    (0, typeorm_1.Column)('float'),
    __metadata("design:type", Number)
], MachineStatus.prototype, "temperature", void 0);
__decorate([
    (0, typeorm_1.Column)('float'),
    __metadata("design:type", Number)
], MachineStatus.prototype, "rpm", void 0);
__decorate([
    (0, typeorm_1.Column)('int'),
    __metadata("design:type", Number)
], MachineStatus.prototype, "uptime", void 0);
__decorate([
    (0, typeorm_1.Column)('float'),
    __metadata("design:type", Number)
], MachineStatus.prototype, "efficiency", void 0);
__decorate([
    (0, typeorm_1.Column)('float'),
    __metadata("design:type", Number)
], MachineStatus.prototype, "oeeOverall", void 0);
__decorate([
    (0, typeorm_1.Column)('float'),
    __metadata("design:type", Number)
], MachineStatus.prototype, "oeeAvailability", void 0);
__decorate([
    (0, typeorm_1.Column)('float'),
    __metadata("design:type", Number)
], MachineStatus.prototype, "oeePerformance", void 0);
__decorate([
    (0, typeorm_1.Column)('float'),
    __metadata("design:type", Number)
], MachineStatus.prototype, "oeeQuality", void 0);
exports.MachineStatus = MachineStatus = __decorate([
    (0, typeorm_1.Entity)()
], MachineStatus);
//# sourceMappingURL=machine-status.entity.js.map