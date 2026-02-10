import { db } from "../name";
import createAnswerCollection from "./answer.collection";
import createCommentCollection from "./comment.collection";
import createQuestionCollection from "./question.collection";
import createVoteCollection from "./vote.collection";

import { databases } from "./config";

export default async function getOrCreateDB() {
  try {
    await databases.get(db)
    console.log("Database connection")
  } catch (error) {
    try {
      await databases.create(db, db)
      console.log("database created")
    } catch (error) {
      console.log("Error creating database", error)
    }
  }

  // Always run collection setup to ensure indexes and attributes are up to date
  try {
    await Promise.all([
      createQuestionCollection(),
      createAnswerCollection(),
      createCommentCollection(),
      createVoteCollection(),
    ])
    console.log("Collections and indexes verified/created")
  } catch (error) {
    console.log("Error setting up collections", error)
  }

  return databases
}