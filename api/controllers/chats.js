export const getChat = () => {
  const command = "SELECT * FROM chats WHERE id = ?"
}

export const sendChat = () => {
  const command = "INSERT INTO chats( `user_id`, `targetUser_id` ) VALUES (?)"
}