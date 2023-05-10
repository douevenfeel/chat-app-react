export const getFormattedMessage = (message: string) => message.split('\n\n').filter(Boolean).join('\n\n');
