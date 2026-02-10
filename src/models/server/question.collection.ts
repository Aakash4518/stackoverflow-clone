import { IndexType, Permission } from "node-appwrite"

import { db, questionCollection } from "../name"
import { databases } from "./config"


export default async function createQuestionCollection() {
  // create collection
  try {
    await databases.createCollection(db, questionCollection, questionCollection, [
      Permission.read("any"),
      Permission.read("users"),
      Permission.create("users"),
      Permission.update("users"),
      Permission.delete("users"),
    ])
    console.log("Question collection is created")
  } catch (error: any) {
    // Collection already exists
    if (error.code !== 409) {
      throw error;
    }
    console.log("Question collection already exists")
  }

  //creating attributes and Indexes
  try {
    await Promise.all([
      databases.createStringAttribute(db, questionCollection, "title", 100, true),
      databases.createStringAttribute(db, questionCollection, "content", 10000, true),
      databases.createStringAttribute(db, questionCollection, "authorId", 50, true),
      databases.createStringAttribute(db, questionCollection, "tags", 50, true, undefined, true),
      databases.createStringAttribute(db, questionCollection, "attachmentId", 50, false),
    ]);
    console.log("Question Attributes created")
  } catch (error: any) {
    // Attributes already exist
    if (error.code !== 409) {
      throw error;
    }
    console.log("Question Attributes already exist")
  }

  // create Indexes
  try {
    await Promise.all([
      databases.createIndex(
        db,
        questionCollection,
        "title",
        IndexType.Fulltext,
        ["title"],
        ['asc']
      ),
      databases.createIndex(
        db,
        questionCollection,
        "content",
        IndexType.Fulltext,
        ["content"],
        ['asc']
      ),
      databases.createIndex(
        db,
        questionCollection,
        "authorId",
        IndexType.Key,
        ["authorId"],
        ['asc']
      ),
      databases.createIndex(
        db,
        questionCollection,
        "$createdAt",
        IndexType.Key,
        ["$createdAt"],
        ['desc']
      )
    ])
    console.log("Question Indexes created")
  } catch (error: any) {
    // Indexes already exist
    if (error.code !== 409) {
      throw error;
    }
    console.log("Question Indexes already exist")
  }
}