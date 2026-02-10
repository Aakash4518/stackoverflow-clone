import { IndexType, Permission } from "node-appwrite";
import { db, voteCollection } from "../name";
import { databases } from "./config";

export default async function createVoteCollection() {
    // Creating Collection
    try {
        await databases.createCollection(db, voteCollection, voteCollection, [
            Permission.create("users"),
            Permission.read("any"),
            Permission.read("users"),
            Permission.update("users"),
            Permission.delete("users"),
        ]);
        console.log("Vote Collection Created");
    } catch (error: any) {
        if (error.code !== 409) throw error;
        console.log("Vote Collection already exists");
    }

    // Creating Attributes
    try {
        await Promise.all([
            databases.createEnumAttribute(db, voteCollection, "type", ["question", "answer"], true),
            databases.createStringAttribute(db, voteCollection, "typeId", 50, true),
            databases.createEnumAttribute(
                db,
                voteCollection,
                "voteStatus",
                ["upvoted", "downvoted"],
                true
            ),
            databases.createStringAttribute(db, voteCollection, "votedById", 50, true),
        ]);
        console.log("Vote Attributes Created");
    } catch (error: any) {
        if (error.code !== 409) throw error;
        console.log("Vote Attributes already exist");
    }

    // Creating Indexes
    try {
        await Promise.all([
            databases.createIndex(
                db,
                voteCollection,
                "type",
                IndexType.Key,
                ["type"],
                ["asc"]
            ),
            databases.createIndex(
                db,
                voteCollection,
                "typeId",
                IndexType.Key,
                ["typeId"],
                ["asc"]
            ),
            databases.createIndex(
                db,
                voteCollection,
                "votedById",
                IndexType.Key,
                ["votedById"],
                ["asc"]
            ),
        ]);
        console.log("Vote Indexes Created");
    } catch (error: any) {
        if (error.code !== 409) throw error;
        console.log("Vote Indexes already exist");
    }
}
