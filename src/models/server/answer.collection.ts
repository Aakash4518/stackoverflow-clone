import { IndexType, Permission } from "node-appwrite";
import { answerCollection, db } from "../name";
import { databases } from "./config";

export default async function createAnswerCollection() {
    // Creating Collection
    try {
        await databases.createCollection(db, answerCollection, answerCollection, [
            Permission.create("users"),
            Permission.read("any"),
            Permission.read("users"),
            Permission.update("users"),
            Permission.delete("users"),
        ]);
        console.log("Answer Collection Created");
    } catch (error: any) {
        if (error.code !== 409) throw error;
        console.log("Answer Collection already exists");
    }

    // Creating Attributes
    try {
        await Promise.all([
            databases.createStringAttribute(db, answerCollection, "content", 10000, true),
            databases.createStringAttribute(db, answerCollection, "questionId", 50, true),
            databases.createStringAttribute(db, answerCollection, "authorId", 50, true),
        ]);
        console.log("Answer Attributes Created");
    } catch (error: any) {
        if (error.code !== 409) throw error;
        console.log("Answer Attributes already exist");
    }

    // Creating Indexes
    try {
        await Promise.all([
            databases.createIndex(
                db,
                answerCollection,
                "questionId",
                IndexType.Key,
                ["questionId"],
                ["asc"]
            ),
            databases.createIndex(
                db,
                answerCollection,
                "authorId",
                IndexType.Key,
                ["authorId"],
                ["asc"]
            ),
        ]);
        console.log("Answer Indexes Created");
    } catch (error: any) {
        if (error.code !== 409) throw error;
        console.log("Answer Indexes already exist");
    }
}
