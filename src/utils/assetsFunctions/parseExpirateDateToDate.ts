export default function parseExpirateDateToDate(expirateDate:string|any){
  const expirateDateSplited = expirateDate.split('/')
  const month = expirateDateSplited[0]
  const year = expirateDateSplited[1]
  const dateString = `20${year}/${month}/30`
  const dateExpirate = new Date(dateString)
  return dateExpirate
}