"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Task = void 0;
const tslib_1 = require("tslib");
const typeorm_1 = require("typeorm");
const base_entity_1 = require("./base.entity");
const index_1 = require("./index");
let Task = class Task extends base_entity_1.BaseEntity {
};
tslib_1.__decorate([
    (0, typeorm_1.Column)({ type: 'varchar' }),
    tslib_1.__metadata("design:type", String)
], Task.prototype, "content", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ type: "enum",
        enum: index_1.TaskStatus,
        default: index_1.TaskStatus.Pending }),
    tslib_1.__metadata("design:type", String)
], Task.prototype, "status", void 0);
tslib_1.__decorate([
    (0, typeorm_1.ManyToOne)(() => index_1.User, user => user.tasks),
    tslib_1.__metadata("design:type", index_1.User)
], Task.prototype, "user", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ type: 'int' }),
    tslib_1.__metadata("design:type", Number)
], Task.prototype, "userId", void 0);
Task = tslib_1.__decorate([
    (0, typeorm_1.Entity)()
], Task);
exports.Task = Task;
//# sourceMappingURL=task.entity.js.map