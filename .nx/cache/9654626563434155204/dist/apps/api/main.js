/******/ (() => { // webpackBootstrap
/******/ 	"use strict";

;// external "reflect-metadata"
const external_reflect_metadata_namespaceObject = require("reflect-metadata");
;// external "@nestjs/common"
const common_namespaceObject = require("@nestjs/common");
;// external "@nestjs/core"
const core_namespaceObject = require("@nestjs/core");
;// external "tslib"
const external_tslib_namespaceObject = require("tslib");
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
;// ../../libs/src/data/base/base.entity.ts
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

;// ../../libs/src/data/base/index.ts


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


;// ../../libs/src/data/user.entity.ts
var user_entity_a, user_entity_b, _c;




let User = class User extends BaseEntity {
};
(0,external_tslib_namespaceObject.__decorate)([
    (0,external_typeorm_namespaceObject.Column)({ type: 'varchar' }),
    (0,external_tslib_namespaceObject.__metadata)("design:type", String)
], User.prototype, "email", void 0);
(0,external_tslib_namespaceObject.__decorate)([
    (0,external_typeorm_namespaceObject.Column)({ type: 'varchar' }),
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
    (0,external_typeorm_namespaceObject.ManyToOne)(() => Organization, organization => organization.users),
    (0,external_tslib_namespaceObject.__metadata)("design:type", typeof (_c = typeof external_typeorm_namespaceObject.Relation !== "undefined" && external_typeorm_namespaceObject.Relation) === "function" ? _c : Object)
], User.prototype, "organization", void 0);
(0,external_tslib_namespaceObject.__decorate)([
    (0,external_typeorm_namespaceObject.Column)({ type: 'int' }),
    (0,external_tslib_namespaceObject.__metadata)("design:type", Number)
], User.prototype, "organizationId", void 0);
User = (0,external_tslib_namespaceObject.__decorate)([
    (0,external_typeorm_namespaceObject.Entity)()
], User);


;// ../../libs/src/data/index.ts






;// ../../libs/src/index.ts



;// ./src/app/audit/audit.service.ts
var audit_service_a;





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
    async findAll() {
        return this.AuditService.findAll();
    }
};
(0,external_tslib_namespaceObject.__decorate)([
    (0,common_namespaceObject.Get)('audit-log'),
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


;// ./src/app/task/task.service.ts
var task_service_a;





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
TaskService = (0,external_tslib_namespaceObject.__decorate)([
    (0,common_namespaceObject.Injectable)(),
    (0,external_tslib_namespaceObject.__param)(0, (0,typeorm_namespaceObject.InjectRepository)(Task)),
    (0,external_tslib_namespaceObject.__metadata)("design:paramtypes", [typeof (task_service_a = typeof external_typeorm_namespaceObject.Repository !== "undefined" && external_typeorm_namespaceObject.Repository) === "function" ? task_service_a : Object])
], TaskService);


;// ./src/app/task/task.controller.ts
var task_controller_a, task_controller_b, task_controller_c, _d, _e, _f, _g, _h;




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
            throw new common_namespaceObject.NotFoundException('task does not exist!');
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
            throw new common_namespaceObject.NotFoundException('task does not exist!');
        }
        return this.taskService.delete(id);
    }
};
(0,external_tslib_namespaceObject.__decorate)([
    (0,common_namespaceObject.Get)(),
    (0,external_tslib_namespaceObject.__metadata)("design:type", Function),
    (0,external_tslib_namespaceObject.__metadata)("design:paramtypes", []),
    (0,external_tslib_namespaceObject.__metadata)("design:returntype", typeof (task_controller_b = typeof Promise !== "undefined" && Promise) === "function" ? task_controller_b : Object)
], TaskController.prototype, "findAll", null);
(0,external_tslib_namespaceObject.__decorate)([
    (0,common_namespaceObject.Get)(':id'),
    (0,external_tslib_namespaceObject.__param)(0, (0,common_namespaceObject.Param)('id')),
    (0,external_tslib_namespaceObject.__metadata)("design:type", Function),
    (0,external_tslib_namespaceObject.__metadata)("design:paramtypes", [Number]),
    (0,external_tslib_namespaceObject.__metadata)("design:returntype", typeof (task_controller_c = typeof Promise !== "undefined" && Promise) === "function" ? task_controller_c : Object)
], TaskController.prototype, "findOne", null);
(0,external_tslib_namespaceObject.__decorate)([
    (0,common_namespaceObject.Post)(),
    (0,external_tslib_namespaceObject.__param)(0, (0,common_namespaceObject.Body)()),
    (0,external_tslib_namespaceObject.__metadata)("design:type", Function),
    (0,external_tslib_namespaceObject.__metadata)("design:paramtypes", [typeof (_d = typeof Task !== "undefined" && Task) === "function" ? _d : Object]),
    (0,external_tslib_namespaceObject.__metadata)("design:returntype", typeof (_e = typeof Promise !== "undefined" && Promise) === "function" ? _e : Object)
], TaskController.prototype, "create", null);
(0,external_tslib_namespaceObject.__decorate)([
    (0,common_namespaceObject.Put)(':id'),
    (0,external_tslib_namespaceObject.__param)(0, (0,common_namespaceObject.Param)('id')),
    (0,external_tslib_namespaceObject.__param)(1, (0,common_namespaceObject.Body)()),
    (0,external_tslib_namespaceObject.__metadata)("design:type", Function),
    (0,external_tslib_namespaceObject.__metadata)("design:paramtypes", [Number, typeof (_f = typeof Task !== "undefined" && Task) === "function" ? _f : Object]),
    (0,external_tslib_namespaceObject.__metadata)("design:returntype", typeof (_g = typeof Promise !== "undefined" && Promise) === "function" ? _g : Object)
], TaskController.prototype, "update", null);
(0,external_tslib_namespaceObject.__decorate)([
    (0,common_namespaceObject.Delete)(':id'),
    (0,external_tslib_namespaceObject.__param)(0, (0,common_namespaceObject.Param)('id')),
    (0,external_tslib_namespaceObject.__metadata)("design:type", Function),
    (0,external_tslib_namespaceObject.__metadata)("design:paramtypes", [Number]),
    (0,external_tslib_namespaceObject.__metadata)("design:returntype", typeof (_h = typeof Promise !== "undefined" && Promise) === "function" ? _h : Object)
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
        imports: [typeorm_namespaceObject.TypeOrmModule.forFeature([Task])],
        controllers: [TaskController],
        providers: [TaskService],
    })
], TasksModule);


;// ./src/app/user.service.ts
var user_service_a;




let UserService = class UserService {
    constructor(dataSource) {
        this.dataSource = dataSource;
        this.userRepository = this.dataSource.getRepository(User);
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
UserService = (0,external_tslib_namespaceObject.__decorate)([
    (0,common_namespaceObject.Injectable)(),
    (0,external_tslib_namespaceObject.__metadata)("design:paramtypes", [typeof (user_service_a = typeof external_typeorm_namespaceObject.DataSource !== "undefined" && external_typeorm_namespaceObject.DataSource) === "function" ? user_service_a : Object])
], UserService);


;// ./src/app/user.controller.ts
var user_controller_a, user_controller_b, user_controller_c, user_controller_d, user_controller_e, user_controller_f, user_controller_g, user_controller_h;




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
            throw new common_namespaceObject.NotFoundException('User does not exist!');
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
            throw new common_namespaceObject.NotFoundException('User does not exist!');
        }
        return this.userService.delete(id);
    }
};
(0,external_tslib_namespaceObject.__decorate)([
    (0,common_namespaceObject.Get)(),
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


;// ./src/app/user.module.ts






let UsersModule = class UsersModule {
};
UsersModule = (0,external_tslib_namespaceObject.__decorate)([
    (0,common_namespaceObject.Module)({
        imports: [typeorm_namespaceObject.TypeOrmModule.forFeature([User])],
        controllers: [UserController],
        providers: [UserService],
    })
], UsersModule);


;// ./src/app/app.module.ts









let AppModule = class AppModule {
};
AppModule = (0,external_tslib_namespaceObject.__decorate)([
    (0,common_namespaceObject.Module)({
        imports: [
            config_namespaceObject.ConfigModule.forRoot(),
            typeorm_namespaceObject.TypeOrmModule.forRoot({
                type: 'postgres',
                host: 'localhost',
                port: 5432,
                username: 'postgres',
                password: 'postgres',
                database: 'postgres',
                entities: [__dirname + '../../../../dist/libs/src/**/*.entity{.js,.d.ts}'],
                synchronize: true,
                logging: true,
            }),
            UsersModule,
            AuditModule,
            TasksModule,
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




async function bootstrap() {
    const app = await core_namespaceObject.NestFactory.create(AppModule);
    const globalPrefix = 'api';
    app.setGlobalPrefix(globalPrefix);
    const port = process.env.PORT || 3000;
    await app.listen(port);
    common_namespaceObject.Logger.log(`🚀 Application is running on: http://localhost:${port}/${globalPrefix}`);
}
bootstrap();

/******/ })()
;
//# sourceMappingURL=main.js.map