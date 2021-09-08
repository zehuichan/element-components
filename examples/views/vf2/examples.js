export const basic = (F2, options) => {
  const data = [
    { genre: 'Sports', sold: 275 },
    { genre: 'Strategy', sold: 115 },
    { genre: 'Action', sold: 120 },
    { genre: 'Shooter', sold: 350 },
    { genre: 'Other', sold: 150 },
  ]

  const chart = new F2.Chart(options)

  chart.source(data)

  chart.interval().position('genre*sold').color('genre')

  chart.render()

  return chart
}

export const line = (F2, options) => {
  const data = [
    { date: '2017-06-05', value: 116 },
    { date: '2017-06-06', value: 129 },
    { date: '2017-06-07', value: 135 },
    { date: '2017-06-08', value: 86 },
    { date: '2017-06-09', value: 73 },
    { date: '2017-06-10', value: 85 },
    { date: '2017-06-11', value: 73 },
    { date: '2017-06-12', value: 68 },
    { date: '2017-06-13', value: 92 },
    { date: '2017-06-14', value: 130 },
    { date: '2017-06-15', value: 245 },
    { date: '2017-06-16', value: 139 },
    { date: '2017-06-17', value: 115 },
    { date: '2017-06-18', value: 111 },
    { date: '2017-06-19', value: 309 },
    { date: '2017-06-20', value: 206 },
    { date: '2017-06-21', value: 137 },
    { date: '2017-06-22', value: 128 },
    { date: '2017-06-23', value: 85 },
    { date: '2017-06-24', value: 94 },
    { date: '2017-06-25', value: 71 },
    { date: '2017-06-26', value: 106 },
    { date: '2017-06-27', value: 84 },
    { date: '2017-06-28', value: 93 },
    { date: '2017-06-29', value: 85 },
    { date: '2017-06-30', value: 73 },
    { date: '2017-07-01', value: 83 },
    { date: '2017-07-02', value: 125 },
    { date: '2017-07-03', value: 107 },
    { date: '2017-07-04', value: 82 },
    { date: '2017-07-05', value: 44 },
    { date: '2017-07-06', value: 72 },
    { date: '2017-07-07', value: 106 },
    { date: '2017-07-08', value: 107 },
    { date: '2017-07-09', value: 66 },
    { date: '2017-07-10', value: 91 },
    { date: '2017-07-11', value: 92 },
    { date: '2017-07-12', value: 113 },
    { date: '2017-07-13', value: 107 },
    { date: '2017-07-14', value: 131 },
    { date: '2017-07-15', value: 111 },
    { date: '2017-07-16', value: 64 },
    { date: '2017-07-17', value: 69 },
    { date: '2017-07-18', value: 88 },
    { date: '2017-07-19', value: 77 },
    { date: '2017-07-20', value: 83 },
    { date: '2017-07-21', value: 111 },
    { date: '2017-07-22', value: 57 },
    { date: '2017-07-23', value: 55 },
    { date: '2017-07-24', value: 60 }
  ]

  const chart = new F2.Chart(options)

  chart.source(data, {
    value: {
      tickCount: 5,
      min: 0
    },
    date: {
      type: 'timeCat',
      range: [0, 1],
      tickCount: 3
    }
  })

  chart.tooltip({
    custom: true,
    showXTip: true,
    showYTip: true,
    snap: true,
    crosshairsType: 'xy',
    crosshairsStyle: {
      lineDash: [2]
    }
  })

  chart.axis('date', {
    label: function label(text, index, total) {
      const textCfg = {}
      if (index === 0) {
        textCfg.textAlign = 'left'
      } else if (index === total - 1) {
        textCfg.textAlign = 'right'
      }
      return textCfg
    }
  })

  chart.line().position('date*value')

  chart.render()

  return chart
}

export const area = (F2, options) => {
  const data = [
    { time: 'Jan.', tem: 1000 },
    { time: 'Feb.', tem: 2200 },
    { time: 'Mar.', tem: 2000 },
    { time: 'Apr.', tem: 2600 },
    { time: 'May.', tem: 2000 },
    { time: 'Jun.', tem: 2600 },
    { time: 'Jul.', tem: 2800 },
    { time: 'Aug.', tem: 2000 }
  ]

  const chart = new F2.Chart(options)

  chart.source(data)

  chart.tooltip({
    showCrosshairs: true
  })

  chart.scale({
    time: {
      range: [0, 1]
    },
    tem: {
      tickCount: 5,
      min: 0
    }
  })

  chart.axis('time', {
    label: function label(text, index, total) {
      const textCfg = {}
      if (index === 0) {
        textCfg.textAlign = 'left'
      } else if (index === total - 1) {
        textCfg.textAlign = 'right'
      }
      return textCfg
    }
  })

  chart.area().position('time*tem')

  chart.line().position('time*tem')

  chart.render()

  return chart
}