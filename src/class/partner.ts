import Http from '../utils/http'
export default class Partner {
  constructor () {
  }
  public findOne (partnerId: string) {
    const url = `http://${process.env.PARTNER_HOST}/${partnerId}`
    return Http({
      url: url,
      method: 'GET'
    })
    .then((response: any) => {
      const {data, status = '', statusText = ''} = response
      if (data.success) {
        return data.data
      }
      return {}
    })
  }
}