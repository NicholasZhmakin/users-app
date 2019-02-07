export const searchUser = (word) => {
  return {
    type: 'FIND_USER',
    word
  }
};