"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
//# sourceMappingURL=enums.js.map