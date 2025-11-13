import { __decorate, __metadata } from "tslib";
import { Column, Entity, ManyToOne } from 'typeorm';
import { BaseEntity } from './base/index';
import { TaskStatus, User } from './index';
let Task = class Task extends BaseEntity {
};
__decorate([
    Column({ type: 'varchar' }),
    __metadata("design:type", String)
], Task.prototype, "content", void 0);
__decorate([
    Column({ type: "enum",
        enum: TaskStatus,
        default: TaskStatus.Pending }),
    __metadata("design:type", String)
], Task.prototype, "status", void 0);
__decorate([
    ManyToOne(() => User, user => user.tasks),
    __metadata("design:type", User)
], Task.prototype, "user", void 0);
__decorate([
    Column({ type: 'int' }),
    __metadata("design:type", Number)
], Task.prototype, "userId", void 0);
Task = __decorate([
    Entity()
], Task);
export { Task };
//# sourceMappingURL=task.entity.js.map