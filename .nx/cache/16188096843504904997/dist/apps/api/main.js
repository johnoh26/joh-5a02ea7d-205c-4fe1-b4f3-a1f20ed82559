/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/************************************************************************/

;// external "tslib"
const external_tslib_namespaceObject = require("tslib");
;// external "@nestjs/common"
const common_namespaceObject = require("@nestjs/common");
;// external "@nestjs/core"
const core_namespaceObject = require("@nestjs/core");
;// external "cookie-parser"
const external_cookie_parser_namespaceObject = require("cookie-parser");
var external_cookie_parser_default = /*#__PURE__*/__webpack_require__.n(external_cookie_parser_namespaceObject);
;// external "reflect-metadata"
const external_reflect_metadata_namespaceObject = require("reflect-metadata");
;// external "@nestjs/config"
const config_namespaceObject = require("@nestjs/config");
;// external "@nestjs/typeorm"
const typeorm_namespaceObject = require("@nestjs/typeorm");
;// ./src/app/app.service.ts


let AppService = class AppService {
    getData() {
        return { message: 'Hello API' };
    }
};
AppService = (0,external_tslib_namespaceObject.__decorate)([
    (0,common_namespaceObject.Injectable)()
], AppService);


;// ./src/app/app.controller.ts
var _a;



let AppController = class AppController {
    constructor(appService) {
        this.appService = appService;
    }
    getData() {
        return this.appService.getData();
    }
};
(0,external_tslib_namespaceObject.__decorate)([
    (0,common_namespaceObject.Get)(),
    (0,external_tslib_namespaceObject.__metadata)("design:type", Function),
    (0,external_tslib_namespaceObject.__metadata)("design:paramtypes", []),
    (0,external_tslib_namespaceObject.__metadata)("design:returntype", void 0)
], AppController.prototype, "getData", null);
AppController = (0,external_tslib_namespaceObject.__decorate)([
    (0,common_namespaceObject.Controller)(),
    (0,external_tslib_namespaceObject.__metadata)("design:paramtypes", [typeof (_a = typeof AppService !== "undefined" && AppService) === "function" ? _a : Object])
], AppController);


;// external "typeorm"
const external_typeorm_namespaceObject = require("typeorm");
;// ../../libs/src/data/base.entity.ts
var base_entity_a, _b;


class BaseEntity {
}
(0,external_tslib_namespaceObject.__decorate)([
    (0,external_typeorm_namespaceObject.PrimaryGeneratedColumn)(),
    (0,external_tslib_namespaceObject.__metadata)("design:type", Number)
], BaseEntity.prototype, "id", void 0);
(0,external_tslib_namespaceObject.__decorate)([
    (0,external_typeorm_namespaceObject.Column)({ type: 'uuid', unique: true, nullable: false, default: () => 'uuid_generate_v4()' }),
    (0,external_tslib_namespaceObject.__metadata)("design:type", String)
], BaseEntity.prototype, "uuid", void 0);
(0,external_tslib_namespaceObject.__decorate)([
    (0,external_typeorm_namespaceObject.Column)({ type: 'boolean', default: true }),
    (0,external_tslib_namespaceObject.__metadata)("design:type", Boolean)
], BaseEntity.prototype, "isActive", void 0);
(0,external_tslib_namespaceObject.__decorate)([
    (0,external_typeorm_namespaceObject.Column)({ type: 'boolean', default: false }),
    (0,external_tslib_namespaceObject.__metadata)("design:type", Boolean)
], BaseEntity.prototype, "isArchived", void 0);
(0,external_tslib_namespaceObject.__decorate)([
    (0,external_typeorm_namespaceObject.CreateDateColumn)({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' }),
    (0,external_tslib_namespaceObject.__metadata)("design:type", typeof (base_entity_a = typeof Date !== "undefined" && Date) === "function" ? base_entity_a : Object)
], BaseEntity.prototype, "createDateTime", void 0);
(0,external_tslib_namespaceObject.__decorate)([
    (0,external_typeorm_namespaceObject.Column)({ type: 'int', nullable: true }),
    (0,external_tslib_namespaceObject.__metadata)("design:type", Number)
], BaseEntity.prototype, "createdBy", void 0);
(0,external_tslib_namespaceObject.__decorate)([
    (0,external_typeorm_namespaceObject.UpdateDateColumn)({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' }),
    (0,external_tslib_namespaceObject.__metadata)("design:type", typeof (_b = typeof Date !== "undefined" && Date) === "function" ? _b : Object)
], BaseEntity.prototype, "lastChangedDateTime", void 0);
(0,external_tslib_namespaceObject.__decorate)([
    (0,external_typeorm_namespaceObject.Column)({ type: 'int', nullable: true }),
    (0,external_tslib_namespaceObject.__metadata)("design:type", Number)
], BaseEntity.prototype, "lastChangedBy", void 0);
(0,external_tslib_namespaceObject.__decorate)([
    (0,external_typeorm_namespaceObject.Column)({ type: 'varchar', length: 300, nullable: true }),
    (0,external_tslib_namespaceObject.__metadata)("design:type", String)
], BaseEntity.prototype, "internalComment", void 0);

;// ../../libs/src/data/audit.entity.ts



let Audit = class Audit extends BaseEntity {
};
(0,external_tslib_namespaceObject.__decorate)([
    (0,external_typeorm_namespaceObject.Column)(),
    (0,external_tslib_namespaceObject.__metadata)("design:type", String)
], Audit.prototype, "content", void 0);
Audit = (0,external_tslib_namespaceObject.__decorate)([
    (0,external_typeorm_namespaceObject.Entity)()
], Audit);


;// ../../libs/src/data/enums.ts
var Role;
(function (Role) {
    Role["Unknown"] = "Unknown";
    Role["Viewer"] = "Viewer";
    Role["Editor"] = "Editor";
    Role["Owner"] = "Owner";
    Role["Admin"] = "Admin";
})(Role || (Role = {}));
var TaskStatus;
(function (TaskStatus) {
    TaskStatus["Unknown"] = "Unknown";
    TaskStatus["Pending"] = "Pending";
    TaskStatus["InProgress"] = "InProgress";
    TaskStatus["Completed"] = "Completed";
})(TaskStatus || (TaskStatus = {}));

;// ./src/app/auth/roles.decorator.ts

const ROLES_KEY = 'roles';
const Roles = (...roles) => (0,common_namespaceObject.SetMetadata)(ROLES_KEY, roles);

;// ./src/app/audit/audit.service.ts
var audit_service_a;





let AuditService = class AuditService {
    constructor(auditRepository) {
        this.auditRepository = auditRepository;
    }
    findAll() {
        return (0,external_tslib_namespaceObject.__awaiter)(this, void 0, void 0, function* () {
            return this.auditRepository.find();
        });
    }
    findOne(id) {
        return (0,external_tslib_namespaceObject.__awaiter)(this, void 0, void 0, function* () {
            return this.auditRepository.findOne({ where: { id } });
        });
    }
    create(Audit) {
        return (0,external_tslib_namespaceObject.__awaiter)(this, void 0, void 0, function* () {
            const newAudit = this.auditRepository.create(Audit);
            return this.auditRepository.save(newAudit);
        });
    }
    update(id, Audit) {
        return (0,external_tslib_namespaceObject.__awaiter)(this, void 0, void 0, function* () {
            yield this.auditRepository.update(id, Audit);
            return this.auditRepository.findOne({ where: { id } });
        });
    }
    delete(id) {
        return (0,external_tslib_namespaceObject.__awaiter)(this, void 0, void 0, function* () {
            yield this.auditRepository.delete(id);
        });
    }
};
AuditService = (0,external_tslib_namespaceObject.__decorate)([
    (0,common_namespaceObject.Injectable)(),
    (0,external_tslib_namespaceObject.__param)(0, (0,typeorm_namespaceObject.InjectRepository)(Audit)),
    (0,external_tslib_namespaceObject.__metadata)("design:paramtypes", [typeof (audit_service_a = typeof external_typeorm_namespaceObject.Repository !== "undefined" && external_typeorm_namespaceObject.Repository) === "function" ? audit_service_a : Object])
], AuditService);


;// ./src/app/audit/audit.controller.ts
var audit_controller_a, audit_controller_b;





let AuditController = class AuditController {
    constructor(AuditService) {
        this.AuditService = AuditService;
    }
    findAll() {
        return (0,external_tslib_namespaceObject.__awaiter)(this, void 0, void 0, function* () {
            return this.AuditService.findAll();
        });
    }
};
(0,external_tslib_namespaceObject.__decorate)([
    (0,common_namespaceObject.Get)('audit-log'),
    Roles(Role.Admin),
    (0,external_tslib_namespaceObject.__metadata)("design:type", Function),
    (0,external_tslib_namespaceObject.__metadata)("design:paramtypes", []),
    (0,external_tslib_namespaceObject.__metadata)("design:returntype", typeof (audit_controller_b = typeof Promise !== "undefined" && Promise) === "function" ? audit_controller_b : Object)
], AuditController.prototype, "findAll", null);
AuditController = (0,external_tslib_namespaceObject.__decorate)([
    (0,common_namespaceObject.Controller)('Audits'),
    (0,external_tslib_namespaceObject.__metadata)("design:paramtypes", [typeof (audit_controller_a = typeof AuditService !== "undefined" && AuditService) === "function" ? audit_controller_a : Object])
], AuditController);


;// ./src/app/audit/audit.module.ts






let AuditModule = class AuditModule {
};
AuditModule = (0,external_tslib_namespaceObject.__decorate)([
    (0,common_namespaceObject.Module)({
        imports: [typeorm_namespaceObject.TypeOrmModule.forFeature([Audit])],
        controllers: [AuditController],
        providers: [AuditService],
    })
], AuditModule);


;// ../../libs/src/data/organization.entity.ts
var organization_entity_a;




let Organization = class Organization extends BaseEntity {
};
(0,external_tslib_namespaceObject.__decorate)([
    (0,external_typeorm_namespaceObject.Column)({ type: 'varchar' }),
    (0,external_tslib_namespaceObject.__metadata)("design:type", String)
], Organization.prototype, "name", void 0);
(0,external_tslib_namespaceObject.__decorate)([
    (0,external_typeorm_namespaceObject.OneToMany)(() => User, user => user.organization),
    (0,external_tslib_namespaceObject.__metadata)("design:type", typeof (organization_entity_a = typeof external_typeorm_namespaceObject.Relation !== "undefined" && external_typeorm_namespaceObject.Relation) === "function" ? organization_entity_a : Object)
], Organization.prototype, "users", void 0);
Organization = (0,external_tslib_namespaceObject.__decorate)([
    (0,external_typeorm_namespaceObject.Entity)()
], Organization);


;// ../../libs/src/data/user.entity.ts
var user_entity_a, user_entity_b, _c;






let User = class User extends BaseEntity {
};
(0,external_tslib_namespaceObject.__decorate)([
    (0,external_typeorm_namespaceObject.Column)({ type: 'varchar', nullable: false }),
    (0,external_tslib_namespaceObject.__metadata)("design:type", String)
], User.prototype, "username", void 0);
(0,external_tslib_namespaceObject.__decorate)([
    (0,external_typeorm_namespaceObject.Column)({ type: 'varchar', nullable: false, unique: true }),
    (0,external_tslib_namespaceObject.__metadata)("design:type", String)
], User.prototype, "email", void 0);
(0,external_tslib_namespaceObject.__decorate)([
    (0,external_typeorm_namespaceObject.Column)({ type: 'varchar', nullable: false }),
    (0,external_tslib_namespaceObject.__metadata)("design:type", String)
], User.prototype, "passwordHash", void 0);
(0,external_tslib_namespaceObject.__decorate)([
    (0,external_typeorm_namespaceObject.Column)({
        type: "enum",
        enum: Role,
        default: Role.Viewer
    }),
    (0,external_tslib_namespaceObject.__metadata)("design:type", typeof (user_entity_a = typeof Role !== "undefined" && Role) === "function" ? user_entity_a : Object)
], User.prototype, "role", void 0);
(0,external_tslib_namespaceObject.__decorate)([
    (0,external_typeorm_namespaceObject.OneToMany)(() => Task, task => task.user),
    (0,external_tslib_namespaceObject.__metadata)("design:type", typeof (user_entity_b = typeof external_typeorm_namespaceObject.Relation !== "undefined" && external_typeorm_namespaceObject.Relation) === "function" ? user_entity_b : Object)
], User.prototype, "tasks", void 0);
(0,external_tslib_namespaceObject.__decorate)([
    (0,external_typeorm_namespaceObject.ManyToOne)(() => Organization, organization => organization.users, { nullable: true }),
    (0,external_tslib_namespaceObject.__metadata)("design:type", typeof (_c = typeof external_typeorm_namespaceObject.Relation !== "undefined" && external_typeorm_namespaceObject.Relation) === "function" ? _c : Object)
], User.prototype, "organization", void 0);
(0,external_tslib_namespaceObject.__decorate)([
    (0,external_typeorm_namespaceObject.Column)({ type: 'int', nullable: true }),
    (0,external_tslib_namespaceObject.__metadata)("design:type", Number)
], User.prototype, "organizationId", void 0);
User = (0,external_tslib_namespaceObject.__decorate)([
    (0,external_typeorm_namespaceObject.Entity)()
], User);


;// ../../libs/src/data/task.entity.ts
var task_entity_a, task_entity_b;





let Task = class Task extends BaseEntity {
};
(0,external_tslib_namespaceObject.__decorate)([
    (0,external_typeorm_namespaceObject.Column)({ type: 'varchar' }),
    (0,external_tslib_namespaceObject.__metadata)("design:type", String)
], Task.prototype, "content", void 0);
(0,external_tslib_namespaceObject.__decorate)([
    (0,external_typeorm_namespaceObject.Column)({ type: "enum",
        enum: TaskStatus,
        default: TaskStatus.Pending }),
    (0,external_tslib_namespaceObject.__metadata)("design:type", typeof (task_entity_a = typeof TaskStatus !== "undefined" && TaskStatus) === "function" ? task_entity_a : Object)
], Task.prototype, "status", void 0);
(0,external_tslib_namespaceObject.__decorate)([
    (0,external_typeorm_namespaceObject.Column)({ type: 'int', nullable: true }),
    (0,external_tslib_namespaceObject.__metadata)("design:type", Number)
], Task.prototype, "priority", void 0);
(0,external_tslib_namespaceObject.__decorate)([
    (0,external_typeorm_namespaceObject.ManyToOne)(() => User, user => user.tasks),
    (0,external_tslib_namespaceObject.__metadata)("design:type", typeof (task_entity_b = typeof User !== "undefined" && User) === "function" ? task_entity_b : Object)
], Task.prototype, "user", void 0);
(0,external_tslib_namespaceObject.__decorate)([
    (0,external_typeorm_namespaceObject.Column)({ type: 'int' }),
    (0,external_tslib_namespaceObject.__metadata)("design:type", Number)
], Task.prototype, "userId", void 0);
Task = (0,external_tslib_namespaceObject.__decorate)([
    (0,external_typeorm_namespaceObject.Entity)()
], Task);


;// ./src/app/task/task.service.ts
var task_service_a, task_service_b;






let TaskService = class TaskService {
    constructor(taskRepository, userRepository) {
        this.taskRepository = taskRepository;
        this.userRepository = userRepository;
    }
    findAll() {
        return (0,external_tslib_namespaceObject.__awaiter)(this, void 0, void 0, function* () {
            return this.taskRepository.find();
        });
    }
    findOne(id) {
        return (0,external_tslib_namespaceObject.__awaiter)(this, void 0, void 0, function* () {
            return this.taskRepository.findOne({ where: { id } });
        });
    }
    create(Task) {
        return (0,external_tslib_namespaceObject.__awaiter)(this, void 0, void 0, function* () {
            const newTask = this.taskRepository.create(Task);
            return this.taskRepository.save(newTask);
        });
    }
    update(id, Task) {
        return (0,external_tslib_namespaceObject.__awaiter)(this, void 0, void 0, function* () {
            yield this.taskRepository.update(id, Task);
            return this.taskRepository.findOne({ where: { id } });
        });
    }
    delete(id) {
        return (0,external_tslib_namespaceObject.__awaiter)(this, void 0, void 0, function* () {
            yield this.taskRepository.delete(id);
        });
    }
    findByUserEmail(email) {
        return (0,external_tslib_namespaceObject.__awaiter)(this, void 0, void 0, function* () {
            // look up user by email
            const user = yield this.userRepository.findOne({ where: { email } });
            if (!user) {
                return [];
            }
            // return all tasks where userId matches
            return this.taskRepository.find({ where: { userId: user.id } });
        });
    }
};
TaskService = (0,external_tslib_namespaceObject.__decorate)([
    (0,common_namespaceObject.Injectable)(),
    (0,external_tslib_namespaceObject.__param)(0, (0,typeorm_namespaceObject.InjectRepository)(Task)),
    (0,external_tslib_namespaceObject.__param)(1, (0,typeorm_namespaceObject.InjectRepository)(User)),
    (0,external_tslib_namespaceObject.__metadata)("design:paramtypes", [typeof (task_service_a = typeof external_typeorm_namespaceObject.Repository !== "undefined" && external_typeorm_namespaceObject.Repository) === "function" ? task_service_a : Object, typeof (task_service_b = typeof external_typeorm_namespaceObject.Repository !== "undefined" && external_typeorm_namespaceObject.Repository) === "function" ? task_service_b : Object])
], TaskService);


;// ./src/app/task/task.controller.ts
var task_controller_a, task_controller_b, task_controller_c, _d, _e, _f, _g, _h, _j;




let TaskController = class TaskController {
    constructor(taskService) {
        this.taskService = taskService;
    }
    //get all tasks
    findAll() {
        return (0,external_tslib_namespaceObject.__awaiter)(this, void 0, void 0, function* () {
            return this.taskService.findAll();
        });
    }
    //get tasks by user email
    findByUserEmail(email) {
        return (0,external_tslib_namespaceObject.__awaiter)(this, void 0, void 0, function* () {
            if (!email) {
                throw new common_namespaceObject.NotFoundException('Email query parameter is required');
            }
            return this.taskService.findByUserEmail(email);
        });
    }
    //get task by id
    findOne(id) {
        return (0,external_tslib_namespaceObject.__awaiter)(this, void 0, void 0, function* () {
            const task = yield this.taskService.findOne(id);
            if (!task) {
                throw new common_namespaceObject.NotFoundException('task does not exist!');
            }
            else {
                return task;
            }
        });
    }
    //create task
    create(task) {
        return (0,external_tslib_namespaceObject.__awaiter)(this, void 0, void 0, function* () {
            return this.taskService.create(task);
        });
    }
    //update task
    update(id, task) {
        return (0,external_tslib_namespaceObject.__awaiter)(this, void 0, void 0, function* () {
            return this.taskService.update(id, task);
        });
    }
    //delete task
    delete(id) {
        return (0,external_tslib_namespaceObject.__awaiter)(this, void 0, void 0, function* () {
            //handle error if task does not exist
            const task = yield this.taskService.findOne(id);
            if (!task) {
                throw new common_namespaceObject.NotFoundException('task does not exist!');
            }
            return this.taskService.delete(id);
        });
    }
};
(0,external_tslib_namespaceObject.__decorate)([
    (0,common_namespaceObject.Get)(),
    (0,external_tslib_namespaceObject.__metadata)("design:type", Function),
    (0,external_tslib_namespaceObject.__metadata)("design:paramtypes", []),
    (0,external_tslib_namespaceObject.__metadata)("design:returntype", typeof (task_controller_b = typeof Promise !== "undefined" && Promise) === "function" ? task_controller_b : Object)
], TaskController.prototype, "findAll", null);
(0,external_tslib_namespaceObject.__decorate)([
    (0,common_namespaceObject.Get)(),
    (0,external_tslib_namespaceObject.__param)(0, (0,common_namespaceObject.Query)('email')),
    (0,external_tslib_namespaceObject.__metadata)("design:type", Function),
    (0,external_tslib_namespaceObject.__metadata)("design:paramtypes", [String]),
    (0,external_tslib_namespaceObject.__metadata)("design:returntype", typeof (task_controller_c = typeof Promise !== "undefined" && Promise) === "function" ? task_controller_c : Object)
], TaskController.prototype, "findByUserEmail", null);
(0,external_tslib_namespaceObject.__decorate)([
    (0,common_namespaceObject.Get)(':id'),
    (0,external_tslib_namespaceObject.__param)(0, (0,common_namespaceObject.Param)('id')),
    (0,external_tslib_namespaceObject.__metadata)("design:type", Function),
    (0,external_tslib_namespaceObject.__metadata)("design:paramtypes", [Number]),
    (0,external_tslib_namespaceObject.__metadata)("design:returntype", typeof (_d = typeof Promise !== "undefined" && Promise) === "function" ? _d : Object)
], TaskController.prototype, "findOne", null);
(0,external_tslib_namespaceObject.__decorate)([
    (0,common_namespaceObject.Post)(),
    (0,external_tslib_namespaceObject.__param)(0, (0,common_namespaceObject.Body)()),
    (0,external_tslib_namespaceObject.__metadata)("design:type", Function),
    (0,external_tslib_namespaceObject.__metadata)("design:paramtypes", [typeof (_e = typeof Task !== "undefined" && Task) === "function" ? _e : Object]),
    (0,external_tslib_namespaceObject.__metadata)("design:returntype", typeof (_f = typeof Promise !== "undefined" && Promise) === "function" ? _f : Object)
], TaskController.prototype, "create", null);
(0,external_tslib_namespaceObject.__decorate)([
    (0,common_namespaceObject.Put)(':id'),
    (0,external_tslib_namespaceObject.__param)(0, (0,common_namespaceObject.Param)('id')),
    (0,external_tslib_namespaceObject.__param)(1, (0,common_namespaceObject.Body)()),
    (0,external_tslib_namespaceObject.__metadata)("design:type", Function),
    (0,external_tslib_namespaceObject.__metadata)("design:paramtypes", [Number, typeof (_g = typeof Task !== "undefined" && Task) === "function" ? _g : Object]),
    (0,external_tslib_namespaceObject.__metadata)("design:returntype", typeof (_h = typeof Promise !== "undefined" && Promise) === "function" ? _h : Object)
], TaskController.prototype, "update", null);
(0,external_tslib_namespaceObject.__decorate)([
    (0,common_namespaceObject.Delete)(':id'),
    (0,external_tslib_namespaceObject.__param)(0, (0,common_namespaceObject.Param)('id')),
    (0,external_tslib_namespaceObject.__metadata)("design:type", Function),
    (0,external_tslib_namespaceObject.__metadata)("design:paramtypes", [Number]),
    (0,external_tslib_namespaceObject.__metadata)("design:returntype", typeof (_j = typeof Promise !== "undefined" && Promise) === "function" ? _j : Object)
], TaskController.prototype, "delete", null);
TaskController = (0,external_tslib_namespaceObject.__decorate)([
    (0,common_namespaceObject.Controller)('tasks'),
    (0,external_tslib_namespaceObject.__metadata)("design:paramtypes", [typeof (task_controller_a = typeof TaskService !== "undefined" && TaskService) === "function" ? task_controller_a : Object])
], TaskController);


;// ./src/app/task/task.module.ts







let TasksModule = class TasksModule {
};
TasksModule = (0,external_tslib_namespaceObject.__decorate)([
    (0,common_namespaceObject.Module)({
        imports: [typeorm_namespaceObject.TypeOrmModule.forFeature([Task, User])],
        controllers: [TaskController],
        providers: [TaskService],
    })
], TasksModule);


;// ./src/app/user/user.service.ts
var user_service_a;





let UserService = class UserService {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    findAll() {
        return (0,external_tslib_namespaceObject.__awaiter)(this, void 0, void 0, function* () {
            return this.userRepository.find();
        });
    }
    findOne(id) {
        return (0,external_tslib_namespaceObject.__awaiter)(this, void 0, void 0, function* () {
            return this.userRepository.findOne({ where: { id } });
        });
    }
    create(user) {
        return (0,external_tslib_namespaceObject.__awaiter)(this, void 0, void 0, function* () {
            const newuser = this.userRepository.create(user);
            return this.userRepository.save(newuser);
        });
    }
    update(id, user) {
        return (0,external_tslib_namespaceObject.__awaiter)(this, void 0, void 0, function* () {
            yield this.userRepository.update(id, user);
            return this.userRepository.findOne({ where: { id } });
        });
    }
    delete(id) {
        return (0,external_tslib_namespaceObject.__awaiter)(this, void 0, void 0, function* () {
            yield this.userRepository.delete(id);
        });
    }
};
UserService = (0,external_tslib_namespaceObject.__decorate)([
    (0,common_namespaceObject.Injectable)(),
    (0,external_tslib_namespaceObject.__param)(0, (0,typeorm_namespaceObject.InjectRepository)(User)),
    (0,external_tslib_namespaceObject.__metadata)("design:paramtypes", [typeof (user_service_a = typeof external_typeorm_namespaceObject.Repository !== "undefined" && external_typeorm_namespaceObject.Repository) === "function" ? user_service_a : Object])
], UserService);


;// ./src/app/user/user.controller.ts
var user_controller_a, user_controller_b, user_controller_c, user_controller_d, user_controller_e, user_controller_f, user_controller_g, user_controller_h;






let UserController = class UserController {
    constructor(userService) {
        this.userService = userService;
    }
    //get all users
    findAll() {
        return (0,external_tslib_namespaceObject.__awaiter)(this, void 0, void 0, function* () {
            return this.userService.findAll();
        });
    }
    //get user by id
    findOne(id) {
        return (0,external_tslib_namespaceObject.__awaiter)(this, void 0, void 0, function* () {
            const user = yield this.userService.findOne(id);
            if (!user) {
                throw new common_namespaceObject.NotFoundException('User does not exist!');
            }
            else {
                return user;
            }
        });
    }
    //create user
    create(user) {
        return (0,external_tslib_namespaceObject.__awaiter)(this, void 0, void 0, function* () {
            return this.userService.create(user);
        });
    }
    //update user
    update(id, user) {
        return (0,external_tslib_namespaceObject.__awaiter)(this, void 0, void 0, function* () {
            return this.userService.update(id, user);
        });
    }
    //delete user
    delete(id) {
        return (0,external_tslib_namespaceObject.__awaiter)(this, void 0, void 0, function* () {
            //handle error if user does not exist
            const user = yield this.userService.findOne(id);
            if (!user) {
                throw new common_namespaceObject.NotFoundException('User does not exist!');
            }
            return this.userService.delete(id);
        });
    }
};
(0,external_tslib_namespaceObject.__decorate)([
    (0,common_namespaceObject.Get)(),
    Roles(Role.Admin),
    (0,external_tslib_namespaceObject.__metadata)("design:type", Function),
    (0,external_tslib_namespaceObject.__metadata)("design:paramtypes", []),
    (0,external_tslib_namespaceObject.__metadata)("design:returntype", typeof (user_controller_b = typeof Promise !== "undefined" && Promise) === "function" ? user_controller_b : Object)
], UserController.prototype, "findAll", null);
(0,external_tslib_namespaceObject.__decorate)([
    (0,common_namespaceObject.Get)(':id'),
    (0,external_tslib_namespaceObject.__param)(0, (0,common_namespaceObject.Param)('id')),
    (0,external_tslib_namespaceObject.__metadata)("design:type", Function),
    (0,external_tslib_namespaceObject.__metadata)("design:paramtypes", [Number]),
    (0,external_tslib_namespaceObject.__metadata)("design:returntype", typeof (user_controller_c = typeof Promise !== "undefined" && Promise) === "function" ? user_controller_c : Object)
], UserController.prototype, "findOne", null);
(0,external_tslib_namespaceObject.__decorate)([
    (0,common_namespaceObject.Post)(),
    (0,external_tslib_namespaceObject.__param)(0, (0,common_namespaceObject.Body)()),
    (0,external_tslib_namespaceObject.__metadata)("design:type", Function),
    (0,external_tslib_namespaceObject.__metadata)("design:paramtypes", [typeof (user_controller_d = typeof User !== "undefined" && User) === "function" ? user_controller_d : Object]),
    (0,external_tslib_namespaceObject.__metadata)("design:returntype", typeof (user_controller_e = typeof Promise !== "undefined" && Promise) === "function" ? user_controller_e : Object)
], UserController.prototype, "create", null);
(0,external_tslib_namespaceObject.__decorate)([
    (0,common_namespaceObject.Put)(':id'),
    (0,external_tslib_namespaceObject.__param)(0, (0,common_namespaceObject.Param)('id')),
    (0,external_tslib_namespaceObject.__param)(1, (0,common_namespaceObject.Body)()),
    (0,external_tslib_namespaceObject.__metadata)("design:type", Function),
    (0,external_tslib_namespaceObject.__metadata)("design:paramtypes", [Number, typeof (user_controller_f = typeof User !== "undefined" && User) === "function" ? user_controller_f : Object]),
    (0,external_tslib_namespaceObject.__metadata)("design:returntype", typeof (user_controller_g = typeof Promise !== "undefined" && Promise) === "function" ? user_controller_g : Object)
], UserController.prototype, "update", null);
(0,external_tslib_namespaceObject.__decorate)([
    (0,common_namespaceObject.Delete)(':id'),
    (0,external_tslib_namespaceObject.__param)(0, (0,common_namespaceObject.Param)('id')),
    (0,external_tslib_namespaceObject.__metadata)("design:type", Function),
    (0,external_tslib_namespaceObject.__metadata)("design:paramtypes", [Number]),
    (0,external_tslib_namespaceObject.__metadata)("design:returntype", typeof (user_controller_h = typeof Promise !== "undefined" && Promise) === "function" ? user_controller_h : Object)
], UserController.prototype, "delete", null);
UserController = (0,external_tslib_namespaceObject.__decorate)([
    (0,common_namespaceObject.Controller)('users'),
    (0,external_tslib_namespaceObject.__metadata)("design:paramtypes", [typeof (user_controller_a = typeof UserService !== "undefined" && UserService) === "function" ? user_controller_a : Object])
], UserController);


;// ./src/app/user/user.module.ts







let UsersModule = class UsersModule {
};
UsersModule = (0,external_tslib_namespaceObject.__decorate)([
    (0,common_namespaceObject.Module)({
        imports: [typeorm_namespaceObject.TypeOrmModule.forFeature([User, Organization])],
        controllers: [UserController],
        providers: [UserService],
        exports: [typeorm_namespaceObject.TypeOrmModule],
    })
], UsersModule);


;// external "@nestjs/jwt"
const jwt_namespaceObject = require("@nestjs/jwt");
;// external "express"
const external_express_namespaceObject = require("express");
;// ./src/app/auth/auth.guard.ts
var auth_guard_a;



let AuthGuard = class AuthGuard {
    constructor(jwtService) {
        this.jwtService = jwtService;
    }
    canActivate(context) {
        var _a;
        const request = context.switchToHttp().getRequest();
        const token = (_a = request.headers.authorization) === null || _a === void 0 ? void 0 : _a.split(' ')[1];
        if (!token)
            return false;
        try {
            const user = this.jwtService.verify(token);
            request.user = user;
            return true;
        }
        catch (_b) {
            return false;
        }
    }
};
AuthGuard = (0,external_tslib_namespaceObject.__decorate)([
    (0,common_namespaceObject.Injectable)(),
    (0,external_tslib_namespaceObject.__metadata)("design:paramtypes", [typeof (auth_guard_a = typeof jwt_namespaceObject.JwtService !== "undefined" && jwt_namespaceObject.JwtService) === "function" ? auth_guard_a : Object])
], AuthGuard);


;// external "bcrypt"
const external_bcrypt_namespaceObject = require("bcrypt");
;// ./src/app/auth/auth.service.ts
var auth_service_a, auth_service_b;







let AuthService = class AuthService {
    constructor(userRepository, jwtService) {
        this.userRepository = userRepository;
        this.jwtService = jwtService;
    }
    register(username, email, password) {
        return (0,external_tslib_namespaceObject.__awaiter)(this, void 0, void 0, function* () {
            const userExists = yield this.userRepository.findOneBy({ email });
            if (userExists) {
                throw new common_namespaceObject.BadRequestException('User already exists');
            }
            const hashedPassword = yield external_bcrypt_namespaceObject.hash(password, 10);
            const newUser = this.userRepository.create({
                username,
                email,
                passwordHash: hashedPassword,
            });
            yield this.userRepository.save(newUser);
            return { message: 'User registered successfully' };
        });
    }
    login(email, password) {
        return (0,external_tslib_namespaceObject.__awaiter)(this, void 0, void 0, function* () {
            const user = yield this.userRepository.findOneBy({ email });
            if (!user) {
                throw new common_namespaceObject.BadRequestException('Invalid credentials');
            }
            const isPasswordValid = yield external_bcrypt_namespaceObject.compare(password, user.passwordHash);
            if (!isPasswordValid) {
                throw new common_namespaceObject.BadRequestException('Invalid credentials');
            }
            const token = this.jwtService.sign({ id: user.id, email: user.email });
            return { message: 'Login successful', token };
        });
    }
};
AuthService = (0,external_tslib_namespaceObject.__decorate)([
    (0,common_namespaceObject.Injectable)(),
    (0,external_tslib_namespaceObject.__param)(0, (0,typeorm_namespaceObject.InjectRepository)(User)),
    (0,external_tslib_namespaceObject.__metadata)("design:paramtypes", [typeof (auth_service_a = typeof external_typeorm_namespaceObject.Repository !== "undefined" && external_typeorm_namespaceObject.Repository) === "function" ? auth_service_a : Object, typeof (auth_service_b = typeof jwt_namespaceObject.JwtService !== "undefined" && jwt_namespaceObject.JwtService) === "function" ? auth_service_b : Object])
], AuthService);


;// ./src/app/auth/auth.controller.ts
var auth_controller_a, auth_controller_b;





let AuthController = class AuthController {
    constructor(authService) {
        this.authService = authService;
    }
    register(username, email, password) {
        return (0,external_tslib_namespaceObject.__awaiter)(this, void 0, void 0, function* () {
            return this.authService.register(username, email, password);
        });
    }
    login(email, password, res) {
        return (0,external_tslib_namespaceObject.__awaiter)(this, void 0, void 0, function* () {
            const result = yield this.authService.login(email, password);
            // Set HttpOnly cookie with JWT so browser stores it automatically
            if (result.token) {
                res.cookie('jwt', result.token, {
                    httpOnly: true,
                    secure: process.env.NODE_ENV === 'production',
                    maxAge: 3600000, // 1 hour
                    sameSite: 'lax',
                    path: '/',
                });
            }
            return result;
        });
    }
    getProfile(req) {
        return req.user;
    }
};
(0,external_tslib_namespaceObject.__decorate)([
    (0,common_namespaceObject.Post)('register'),
    (0,external_tslib_namespaceObject.__param)(0, (0,common_namespaceObject.Body)('username')),
    (0,external_tslib_namespaceObject.__param)(1, (0,common_namespaceObject.Body)('email')),
    (0,external_tslib_namespaceObject.__param)(2, (0,common_namespaceObject.Body)('password')),
    (0,external_tslib_namespaceObject.__metadata)("design:type", Function),
    (0,external_tslib_namespaceObject.__metadata)("design:paramtypes", [String, String, String]),
    (0,external_tslib_namespaceObject.__metadata)("design:returntype", Promise)
], AuthController.prototype, "register", null);
(0,external_tslib_namespaceObject.__decorate)([
    (0,common_namespaceObject.Post)('login'),
    (0,external_tslib_namespaceObject.__param)(0, (0,common_namespaceObject.Body)('email')),
    (0,external_tslib_namespaceObject.__param)(1, (0,common_namespaceObject.Body)('password')),
    (0,external_tslib_namespaceObject.__param)(2, (0,common_namespaceObject.Res)({ passthrough: true })),
    (0,external_tslib_namespaceObject.__metadata)("design:type", Function),
    (0,external_tslib_namespaceObject.__metadata)("design:paramtypes", [String, String, typeof (auth_controller_b = typeof external_express_namespaceObject.Response !== "undefined" && external_express_namespaceObject.Response) === "function" ? auth_controller_b : Object]),
    (0,external_tslib_namespaceObject.__metadata)("design:returntype", Promise)
], AuthController.prototype, "login", null);
(0,external_tslib_namespaceObject.__decorate)([
    (0,common_namespaceObject.Get)('profile'),
    (0,common_namespaceObject.UseGuards)(AuthGuard),
    (0,external_tslib_namespaceObject.__param)(0, (0,common_namespaceObject.Request)()),
    (0,external_tslib_namespaceObject.__metadata)("design:type", Function),
    (0,external_tslib_namespaceObject.__metadata)("design:paramtypes", [Object]),
    (0,external_tslib_namespaceObject.__metadata)("design:returntype", void 0)
], AuthController.prototype, "getProfile", null);
AuthController = (0,external_tslib_namespaceObject.__decorate)([
    (0,common_namespaceObject.Controller)('auth'),
    (0,external_tslib_namespaceObject.__metadata)("design:paramtypes", [typeof (auth_controller_a = typeof AuthService !== "undefined" && AuthService) === "function" ? auth_controller_a : Object])
], AuthController);


;// ./src/app/auth/auth.module.ts






let AuthModule = class AuthModule {
};
AuthModule = (0,external_tslib_namespaceObject.__decorate)([
    (0,common_namespaceObject.Module)({
        imports: [UsersModule, jwt_namespaceObject.JwtModule.register({
                secret: process.env.JWT_SECRET || 'your-secret-key',
                signOptions: {
                    expiresIn: '1h', // or '7d', '30m', '24h', etc.
                },
            })],
        providers: [AuthService],
        controllers: [AuthController]
    })
], AuthModule);


;// ./src/app/app.module.ts










let AppModule = class AppModule {
};
AppModule = (0,external_tslib_namespaceObject.__decorate)([
    (0,common_namespaceObject.Module)({
        imports: [
            config_namespaceObject.ConfigModule.forRoot({}),
            typeorm_namespaceObject.TypeOrmModule.forRoot({
                type: 'postgres',
                host: process.env.DB_HOST || 'localhost',
                port: parseInt(process.env.DB_PORT, 10) || 5432,
                username: process.env.DB_USERNAME || 'postgres',
                password: process.env.DB_PASSWORD || 'postgres',
                database: process.env.DB_NAME || 'postgres',
                autoLoadEntities: true, // autoLoadEntities will register entities added via TypeOrmModule.forFeature()
                synchronize: true, // sync database schema with entities (disable in production)
                logging: true,
            }),
            UsersModule,
            AuditModule,
            TasksModule,
            AuthModule,
        ],
        controllers: [AppController],
        providers: [AppService],
    })
], AppModule);


;// ./src/main.ts

/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */





function bootstrap() {
    return (0,external_tslib_namespaceObject.__awaiter)(this, void 0, void 0, function* () {
        const app = yield core_namespaceObject.NestFactory.create(AppModule);
        const globalPrefix = 'api';
        app.setGlobalPrefix(globalPrefix);
        const port = process.env.PORT || 3000;
        app.use(external_cookie_parser_default()());
        yield app.listen(port);
        common_namespaceObject.Logger.log(`🚀 Application is running on: http://localhost:${port}/${globalPrefix}`);
    });
}
bootstrap();

/******/ })()
;
//# sourceMappingURL=main.js.map