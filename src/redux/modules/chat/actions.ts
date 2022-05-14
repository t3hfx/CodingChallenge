export const saveMessage = (message: string) => ({
  type: 'SAVE_MESSAGE' as const,
  message: message,
});
