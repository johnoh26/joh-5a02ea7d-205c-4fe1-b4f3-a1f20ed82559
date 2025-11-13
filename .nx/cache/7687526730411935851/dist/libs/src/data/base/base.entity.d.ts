export declare abstract class BaseEntity {
    id: number;
    uuid: string;
    isActive: boolean;
    isArchived: boolean;
    createDateTime: Date;
    createdBy: number | null;
    lastChangedDateTime: Date;
    lastChangedBy: number | null;
    internalComment: string | null;
}
