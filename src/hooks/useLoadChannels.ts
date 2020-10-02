import channels from '../data/channels.json'

export const useLoadChannels = () => {
  const sortingQualityAndAvailability = (qualities: any) => {
    // uhd > hd > sd
    let resQuality: {
      level: string
      availability: string
    } | null = null
    qualities.forEach((quality: any) => {
      if (quality.level === 'uhd' && quality.availability === 'available') {
        resQuality = quality
      } else if (quality.level === 'hd' && quality.availability === 'available') {
        resQuality = quality
      } else if (quality.level === 'sd' && quality.availability === 'available') {
        resQuality = quality
      }
    })
    return resQuality
  }

  const filteredChannels: { cid: string; title: string; data: any }[] = []
  channels.channels.forEach(function (item) {
    const i = filteredChannels.findIndex((x) => x.cid === item.cid)
    if (i <= -1) {
      const quality = sortingQualityAndAvailability(item.qualities)
      if (quality !== null) {
        filteredChannels.push({ cid: item.cid, title: item.title, data: quality })
      }
    }
  })

  return { filteredChannels }
}
