/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((module) => {

module.exports = require("reflect-metadata");

/***/ }),
/* 2 */
/***/ ((module) => {

module.exports = require("@nestjs/common");

/***/ }),
/* 3 */
/***/ ((module) => {

module.exports = require("@nestjs/core");

/***/ }),
/* 4 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppModule = void 0;
const tslib_1 = __webpack_require__(5);
const common_1 = __webpack_require__(2);
const config_1 = __webpack_require__(6);
const typeorm_1 = __webpack_require__(7);
const app_controller_1 = __webpack_require__(8);
const app_service_1 = __webpack_require__(9);
const audit_module_1 = __webpack_require__(10);
const task_module_1 = __webpack_require__(23);
const user_module_1 = __webpack_require__(26);
let AppModule = class AppModule {
};
AppModule = tslib_1.__decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot(),
            typeorm_1.TypeOrmModule.forRoot({
                type: 'postgres',
                host: 'localhost',
                port: 5432,
                username: 'postgres',
                password: 'postgres',
                database: 'postgres',
                entities: process.env.NODE_ENV === 'production'
                    ? [__dirname + '../../../../libs/src/data/*.entity.js',]
                    : [__dirname + '../../../../libs/src/data/*.entity.ts',],
                synchronize: true,
                logging: true,
            }),
            user_module_1.UsersModule,
            audit_module_1.AuditModule,
            task_module_1.TasksModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
exports.AppModule = AppModule;


/***/ }),
/* 5 */
/***/ ((module) => {

module.exports = require("tslib");

/***/ }),
/* 6 */
/***/ ((module) => {

module.exports = require("@nestjs/config");

/***/ }),
/* 7 */
/***/ ((module) => {

module.exports = require("@nestjs/typeorm");

/***/ }),
/* 8 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppController = void 0;
const tslib_1 = __webpack_require__(5);
const common_1 = __webpack_require__(2);
const app_service_1 = __webpack_require__(9);
// import {AppDataSource} from '../../../../libs/src/data/datasource';
let AppController = class AppController {
    constructor(appService) {
        this.appService = appService;
    }
    getData() {
        // added comments
        // AppDataSource.manager.find;
        return this.appService.getData();
    }
};
tslib_1.__decorate([
    (0, common_1.Get)(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", void 0)
], AppController.prototype, "getData", null);
AppController = tslib_1.__decorate([
    (0, common_1.Controller)(),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof app_service_1.AppService !== "undefined" && app_service_1.AppService) === "function" ? _a : Object])
], AppController);
exports.AppController = AppController;


/***/ }),
/* 9 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppService = void 0;
const tslib_1 = __webpack_require__(5);
const common_1 = __webpack_require__(2);
let AppService = class AppService {
    getData() {
        return { message: 'Hello API' };
    }
};
AppService = tslib_1.__decorate([
    (0, common_1.Injectable)()
], AppService);
exports.AppService = AppService;


/***/ }),
/* 10 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuditModule = void 0;
const tslib_1 = __webpack_require__(5);
const libs_1 = __webpack_require__(11);
const common_1 = __webpack_require__(2);
const typeorm_1 = __webpack_require__(7);
const audit_controller_1 = __webpack_require__(21);
const audit_service_1 = __webpack_require__(22);
let AuditModule = class AuditModule {
};
AuditModule = tslib_1.__decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([libs_1.Audit])],
        controllers: [audit_controller_1.AuditController],
        providers: [audit_service_1.AuditService],
    })
], AuditModule);
exports.AuditModule = AuditModule;


/***/ }),
/* 11 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(5);
tslib_1.__exportStar(__webpack_require__(12), exports);
tslib_1.__exportStar(__webpack_require__(20), exports);


/***/ }),
/* 12 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(5);
tslib_1.__exportStar(__webpack_require__(13), exports);
tslib_1.__exportStar(__webpack_require__(16), exports);
tslib_1.__exportStar(__webpack_require__(18), exports);
// export * from './datasource';


/***/ }),
/* 13 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Audit = void 0;
const tslib_1 = __webpack_require__(5);
const typeorm_1 = __webpack_require__(14);
const base_entity_1 = __webpack_require__(15);
let Audit = class Audit extends base_entity_1.BaseEntity {
};
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", String)
], Audit.prototype, "content", void 0);
Audit = tslib_1.__decorate([
    (0, typeorm_1.Entity)()
], Audit);
exports.Audit = Audit;


/***/ }),
/* 14 */
/***/ ((module) => {

module.exports = require("typeorm");

/***/ }),
/* 15 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BaseEntity = void 0;
const tslib_1 = __webpack_require__(5);
const typeorm_1 = __webpack_require__(14);
class BaseEntity {
}
tslib_1.__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    tslib_1.__metadata("design:type", Number)
], BaseEntity.prototype, "id", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ type: 'uuid', unique: true, nullable: false, default: () => 'uuid_generate_v4()' }),
    tslib_1.__metadata("design:type", String)
], BaseEntity.prototype, "uuid", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ type: 'boolean', default: true }),
    tslib_1.__metadata("design:type", Boolean)
], BaseEntity.prototype, "isActive", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ type: 'boolean', default: false }),
    tslib_1.__metadata("design:type", Boolean)
], BaseEntity.prototype, "isArchived", void 0);
tslib_1.__decorate([
    (0, typeorm_1.CreateDateColumn)({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' }),
    tslib_1.__metadata("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)
], BaseEntity.prototype, "createDateTime", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ type: 'int', nullable: true }),
    tslib_1.__metadata("design:type", Number)
], BaseEntity.prototype, "createdBy", void 0);
tslib_1.__decorate([
    (0, typeorm_1.UpdateDateColumn)({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' }),
    tslib_1.__metadata("design:type", typeof (_b = typeof Date !== "undefined" && Date) === "function" ? _b : Object)
], BaseEntity.prototype, "lastChangedDateTime", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ type: 'int', nullable: true }),
    tslib_1.__metadata("design:type", Number)
], BaseEntity.prototype, "lastChangedBy", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 300, nullable: true }),
    tslib_1.__metadata("design:type", String)
], BaseEntity.prototype, "internalComment", void 0);
exports.BaseEntity = BaseEntity;


/***/ }),
/* 16 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Task = void 0;
const tslib_1 = __webpack_require__(5);
const typeorm_1 = __webpack_require__(14);
const base_entity_1 = __webpack_require__(15);
const enums_1 = __webpack_require__(17);
const user_entity_1 = __webpack_require__(18);
let Task = class Task extends base_entity_1.BaseEntity {
};
tslib_1.__decorate([
    (0, typeorm_1.Column)({ type: 'varchar' }),
    tslib_1.__metadata("design:type", String)
], Task.prototype, "content", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ type: "enum",
        enum: enums_1.TaskStatus,
        default: enums_1.TaskStatus.Pending }),
    tslib_1.__metadata("design:type", typeof (_a = typeof enums_1.TaskStatus !== "undefined" && enums_1.TaskStatus) === "function" ? _a : Object)
], Task.prototype, "status", void 0);
tslib_1.__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, user => user.tasks),
    tslib_1.__metadata("design:type", typeof (_b = typeof user_entity_1.User !== "undefined" && user_entity_1.User) === "function" ? _b : Object)
], Task.prototype, "user", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ type: 'int' }),
    tslib_1.__metadata("design:type", Number)
], Task.prototype, "userId", void 0);
Task = tslib_1.__decorate([
    (0, typeorm_1.Entity)()
], Task);
exports.Task = Task;


/***/ }),
/* 17 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TaskStatus = exports.Role = void 0;
var Role;
(function (Role) {
    Role["Unknown"] = "Unknown";
    Role["Viewer"] = "Viewer";
    Role["Editor"] = "Editor";
    Role["Owner"] = "Owner";
    Role["Admin"] = "Admin";
})(Role = exports.Role || (exports.Role = {}));
var TaskStatus;
(function (TaskStatus) {
    TaskStatus["Unknown"] = "Unknown";
    TaskStatus["Pending"] = "Pending";
    TaskStatus["InProgress"] = "InProgress";
    TaskStatus["Completed"] = "Completed";
})(TaskStatus = exports.TaskStatus || (exports.TaskStatus = {}));


/***/ }),
/* 18 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.User = void 0;
const tslib_1 = __webpack_require__(5);
const typeorm_1 = __webpack_require__(14);
const base_entity_1 = __webpack_require__(15);
const enums_1 = __webpack_require__(17);
const organization_entity_1 = __webpack_require__(19);
const task_entity_1 = __webpack_require__(16);
let User = class User extends base_entity_1.BaseEntity {
};
tslib_1.__decorate([
    (0, typeorm_1.Column)({ type: 'varchar' }),
    tslib_1.__metadata("design:type", String)
], User.prototype, "email", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ type: 'varchar' }),
    tslib_1.__metadata("design:type", String)
], User.prototype, "passwordHash", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({
        type: "enum",
        enum: enums_1.Role,
        default: enums_1.Role.Viewer
    }),
    tslib_1.__metadata("design:type", typeof (_a = typeof enums_1.Role !== "undefined" && enums_1.Role) === "function" ? _a : Object)
], User.prototype, "role", void 0);
tslib_1.__decorate([
    (0, typeorm_1.OneToMany)(() => task_entity_1.Task, task => task.user),
    tslib_1.__metadata("design:type", Array)
], User.prototype, "tasks", void 0);
tslib_1.__decorate([
    (0, typeorm_1.ManyToOne)(() => organization_entity_1.Organization, organization => organization.users),
    tslib_1.__metadata("design:type", typeof (_b = typeof organization_entity_1.Organization !== "undefined" && organization_entity_1.Organization) === "function" ? _b : Object)
], User.prototype, "organization", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ type: 'int' }),
    tslib_1.__metadata("design:type", Number)
], User.prototype, "organizationId", void 0);
User = tslib_1.__decorate([
    (0, typeorm_1.Entity)()
], User);
exports.User = User;


/***/ }),
/* 19 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Organization = void 0;
const tslib_1 = __webpack_require__(5);
const typeorm_1 = __webpack_require__(14);
const base_entity_1 = __webpack_require__(15);
const user_entity_1 = __webpack_require__(18);
let Organization = class Organization extends base_entity_1.BaseEntity {
};
tslib_1.__decorate([
    (0, typeorm_1.Column)({ type: 'varchar' }),
    tslib_1.__metadata("design:type", String)
], Organization.prototype, "name", void 0);
tslib_1.__decorate([
    (0, typeorm_1.OneToMany)(() => user_entity_1.User, user => user.organization),
    tslib_1.__metadata("design:type", Array)
], Organization.prototype, "users", void 0);
Organization = tslib_1.__decorate([
    (0, typeorm_1.Entity)()
], Organization);
exports.Organization = Organization;


/***/ }),
/* 20 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(5);
tslib_1.__exportStar(__webpack_require__(20), exports);


/***/ }),
/* 21 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuditController = void 0;
const tslib_1 = __webpack_require__(5);
const common_1 = __webpack_require__(2);
const audit_service_1 = __webpack_require__(22);
let AuditController = class AuditController {
    constructor(AuditService) {
        this.AuditService = AuditService;
    }
    async findAll() {
        return this.AuditService.findAll();
    }
};
tslib_1.__decorate([
    (0, common_1.Get)('audit-log'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", typeof (_b = typeof Promise !== "undefined" && Promise) === "function" ? _b : Object)
], AuditController.prototype, "findAll", null);
AuditController = tslib_1.__decorate([
    (0, common_1.Controller)('Audits'),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof audit_service_1.AuditService !== "undefined" && audit_service_1.AuditService) === "function" ? _a : Object])
], AuditController);
exports.AuditController = AuditController;


/***/ }),
/* 22 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuditService = void 0;
const tslib_1 = __webpack_require__(5);
const libs_1 = __webpack_require__(11);
const common_1 = __webpack_require__(2);
const typeorm_1 = __webpack_require__(7);
const typeorm_2 = __webpack_require__(14);
let AuditService = class AuditService {
    constructor(auditRepository) {
        this.auditRepository = auditRepository;
    }
    async findAll() {
        return this.auditRepository.find();
    }
    async findOne(id) {
        return this.auditRepository.findOne({ where: { id } });
    }
    async create(Audit) {
        const newAudit = this.auditRepository.create(Audit);
        return this.auditRepository.save(newAudit);
    }
    async update(id, Audit) {
        await this.auditRepository.update(id, Audit);
        return this.auditRepository.findOne({ where: { id } });
    }
    async delete(id) {
        await this.auditRepository.delete(id);
    }
};
AuditService = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__param(0, (0, typeorm_1.InjectRepository)(libs_1.Audit)),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object])
], AuditService);
exports.AuditService = AuditService;


/***/ }),
/* 23 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TasksModule = void 0;
const tslib_1 = __webpack_require__(5);
const libs_1 = __webpack_require__(11);
const common_1 = __webpack_require__(2);
const typeorm_1 = __webpack_require__(7);
const task_controller_1 = __webpack_require__(24);
const task_service_1 = __webpack_require__(25);
let TasksModule = class TasksModule {
};
TasksModule = tslib_1.__decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([libs_1.Task])],
        controllers: [task_controller_1.TaskController],
        providers: [task_service_1.TaskService],
    })
], TasksModule);
exports.TasksModule = TasksModule;


/***/ }),
/* 24 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b, _c, _d, _e, _f, _g, _h;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TaskController = void 0;
const tslib_1 = __webpack_require__(5);
const libs_1 = __webpack_require__(11);
const common_1 = __webpack_require__(2);
const task_service_1 = __webpack_require__(25);
let TaskController = class TaskController {
    constructor(taskService) {
        this.taskService = taskService;
    }
    //get all tasks
    async findAll() {
        return this.taskService.findAll();
    }
    //get task by id
    async findOne(id) {
        const task = await this.taskService.findOne(id);
        if (!task) {
            throw new common_1.NotFoundException('task does not exist!');
        }
        else {
            return task;
        }
    }
    //create task
    async create(task) {
        return this.taskService.create(task);
    }
    //update task
    async update(id, task) {
        return this.taskService.update(id, task);
    }
    //delete task
    async delete(id) {
        //handle error if task does not exist
        const task = await this.taskService.findOne(id);
        if (!task) {
            throw new common_1.NotFoundException('task does not exist!');
        }
        return this.taskService.delete(id);
    }
};
tslib_1.__decorate([
    (0, common_1.Get)(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", typeof (_b = typeof Promise !== "undefined" && Promise) === "function" ? _b : Object)
], TaskController.prototype, "findAll", null);
tslib_1.__decorate([
    (0, common_1.Get)(':id'),
    tslib_1.__param(0, (0, common_1.Param)('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number]),
    tslib_1.__metadata("design:returntype", typeof (_c = typeof Promise !== "undefined" && Promise) === "function" ? _c : Object)
], TaskController.prototype, "findOne", null);
tslib_1.__decorate([
    (0, common_1.Post)(),
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [typeof (_d = typeof libs_1.Task !== "undefined" && libs_1.Task) === "function" ? _d : Object]),
    tslib_1.__metadata("design:returntype", typeof (_e = typeof Promise !== "undefined" && Promise) === "function" ? _e : Object)
], TaskController.prototype, "create", null);
tslib_1.__decorate([
    (0, common_1.Put)(':id'),
    tslib_1.__param(0, (0, common_1.Param)('id')),
    tslib_1.__param(1, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, typeof (_f = typeof libs_1.Task !== "undefined" && libs_1.Task) === "function" ? _f : Object]),
    tslib_1.__metadata("design:returntype", typeof (_g = typeof Promise !== "undefined" && Promise) === "function" ? _g : Object)
], TaskController.prototype, "update", null);
tslib_1.__decorate([
    (0, common_1.Delete)(':id'),
    tslib_1.__param(0, (0, common_1.Param)('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number]),
    tslib_1.__metadata("design:returntype", typeof (_h = typeof Promise !== "undefined" && Promise) === "function" ? _h : Object)
], TaskController.prototype, "delete", null);
TaskController = tslib_1.__decorate([
    (0, common_1.Controller)('tasks'),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof task_service_1.TaskService !== "undefined" && task_service_1.TaskService) === "function" ? _a : Object])
], TaskController);
exports.TaskController = TaskController;


/***/ }),
/* 25 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TaskService = void 0;
const tslib_1 = __webpack_require__(5);
const libs_1 = __webpack_require__(11);
const common_1 = __webpack_require__(2);
const typeorm_1 = __webpack_require__(7);
const typeorm_2 = __webpack_require__(14);
let TaskService = class TaskService {
    constructor(taskRepository) {
        this.taskRepository = taskRepository;
    }
    async findAll() {
        return this.taskRepository.find();
    }
    async findOne(id) {
        return this.taskRepository.findOne({ where: { id } });
    }
    async create(Task) {
        const newTask = this.taskRepository.create(Task);
        return this.taskRepository.save(newTask);
    }
    async update(id, Task) {
        await this.taskRepository.update(id, Task);
        return this.taskRepository.findOne({ where: { id } });
    }
    async delete(id) {
        await this.taskRepository.delete(id);
    }
};
TaskService = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__param(0, (0, typeorm_1.InjectRepository)(libs_1.Task)),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object])
], TaskService);
exports.TaskService = TaskService;


/***/ }),
/* 26 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UsersModule = void 0;
const tslib_1 = __webpack_require__(5);
const libs_1 = __webpack_require__(11);
const common_1 = __webpack_require__(2);
const typeorm_1 = __webpack_require__(7);
const user_controller_1 = __webpack_require__(27);
const user_service_1 = __webpack_require__(28);
let UsersModule = class UsersModule {
};
UsersModule = tslib_1.__decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([libs_1.User])],
        controllers: [user_controller_1.UserController],
        providers: [user_service_1.UserService],
    })
], UsersModule);
exports.UsersModule = UsersModule;


/***/ }),
/* 27 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b, _c, _d, _e, _f, _g, _h;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserController = void 0;
const tslib_1 = __webpack_require__(5);
const common_1 = __webpack_require__(2);
const user_service_1 = __webpack_require__(28);
const libs_1 = __webpack_require__(11);
let UserController = class UserController {
    constructor(userService) {
        this.userService = userService;
    }
    //get all users
    async findAll() {
        return this.userService.findAll();
    }
    //get user by id
    async findOne(id) {
        const user = await this.userService.findOne(id);
        if (!user) {
            throw new common_1.NotFoundException('User does not exist!');
        }
        else {
            return user;
        }
    }
    //create user
    async create(user) {
        return this.userService.create(user);
    }
    //update user
    async update(id, user) {
        return this.userService.update(id, user);
    }
    //delete user
    async delete(id) {
        //handle error if user does not exist
        const user = await this.userService.findOne(id);
        if (!user) {
            throw new common_1.NotFoundException('User does not exist!');
        }
        return this.userService.delete(id);
    }
};
tslib_1.__decorate([
    (0, common_1.Get)(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", typeof (_b = typeof Promise !== "undefined" && Promise) === "function" ? _b : Object)
], UserController.prototype, "findAll", null);
tslib_1.__decorate([
    (0, common_1.Get)(':id'),
    tslib_1.__param(0, (0, common_1.Param)('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number]),
    tslib_1.__metadata("design:returntype", typeof (_c = typeof Promise !== "undefined" && Promise) === "function" ? _c : Object)
], UserController.prototype, "findOne", null);
tslib_1.__decorate([
    (0, common_1.Post)(),
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [typeof (_d = typeof libs_1.User !== "undefined" && libs_1.User) === "function" ? _d : Object]),
    tslib_1.__metadata("design:returntype", typeof (_e = typeof Promise !== "undefined" && Promise) === "function" ? _e : Object)
], UserController.prototype, "create", null);
tslib_1.__decorate([
    (0, common_1.Put)(':id'),
    tslib_1.__param(0, (0, common_1.Param)('id')),
    tslib_1.__param(1, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, typeof (_f = typeof libs_1.User !== "undefined" && libs_1.User) === "function" ? _f : Object]),
    tslib_1.__metadata("design:returntype", typeof (_g = typeof Promise !== "undefined" && Promise) === "function" ? _g : Object)
], UserController.prototype, "update", null);
tslib_1.__decorate([
    (0, common_1.Delete)(':id'),
    tslib_1.__param(0, (0, common_1.Param)('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number]),
    tslib_1.__metadata("design:returntype", typeof (_h = typeof Promise !== "undefined" && Promise) === "function" ? _h : Object)
], UserController.prototype, "delete", null);
UserController = tslib_1.__decorate([
    (0, common_1.Controller)('users'),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof user_service_1.UserService !== "undefined" && user_service_1.UserService) === "function" ? _a : Object])
], UserController);
exports.UserController = UserController;


/***/ }),
/* 28 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserService = void 0;
const tslib_1 = __webpack_require__(5);
const libs_1 = __webpack_require__(11);
const common_1 = __webpack_require__(2);
const typeorm_1 = __webpack_require__(14);
let UserService = class UserService {
    constructor(dataSource) {
        this.dataSource = dataSource;
        this.userRepository = this.dataSource.getRepository(libs_1.User);
    }
    async findAll() {
        return this.userRepository.find();
    }
    async findOne(id) {
        return this.userRepository.findOne({ where: { id } });
    }
    async create(user) {
        const newuser = this.userRepository.create(user);
        return this.userRepository.save(newuser);
    }
    async update(id, user) {
        await this.userRepository.update(id, user);
        return this.userRepository.findOne({ where: { id } });
    }
    async delete(id) {
        await this.userRepository.delete(id);
    }
};
UserService = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof typeorm_1.DataSource !== "undefined" && typeorm_1.DataSource) === "function" ? _a : Object])
], UserService);
exports.UserService = UserService;


/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;

Object.defineProperty(exports, "__esModule", ({ value: true }));
/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */
__webpack_require__(1);
const common_1 = __webpack_require__(2);
const core_1 = __webpack_require__(3);
const app_module_1 = __webpack_require__(4);
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const globalPrefix = 'api';
    app.setGlobalPrefix(globalPrefix);
    const port = process.env.PORT || 3000;
    await app.listen(port);
    common_1.Logger.log(`🚀 Application is running on: http://localhost:${port}/${globalPrefix}`);
}
bootstrap();

})();

/******/ })()
;
//# sourceMappingURL=main.js.map