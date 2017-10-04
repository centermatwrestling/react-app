export const sendNotification = (notification) => {
  return {
    type:'notification',
    value: notification
  }
}
