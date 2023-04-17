module.exports = {
  onWillParseMarkdown: function (markdown) {
    return new Promise((resolve, reject) => {

      markdown = markdown.replace(/::: info[\s\S]*?:::/gm, (info_alert) => {
        info_alert = '<div class="alert alert-info">\n' + info_alert.slice(8)
        info_alert = info_alert.slice(0, -3) + '</div>'
        return info_alert
      })

      markdown = markdown.replace(/::: success[\s\S]*?:::/gm, (success_alert) => {
        success_alert = '<div class="alert alert-success">\n' + success_alert.slice(11)
        success_alert = success_alert.slice(0, -3) + '</div>'
        return success_alert
      })

      markdown = markdown.replace(/::: warning[\s\S]*?:::/gm, (warning_alert) => {
        warning_alert = '<div class="alert alert-warning">\n' + warning_alert.slice(11)
        warning_alert = warning_alert.slice(0, -3) + '</div>'
        return warning_alert
      })

      markdown = markdown.replace(/::: danger[\s\S]*?:::/gm, (danger_alert) => {
        danger_alert = '<div class="alert alert-danger">\n' + danger_alert.slice(10)
        danger_alert = danger_alert.slice(0, -3) + '</div>'
        return danger_alert
      })

      return resolve(markdown)
    })
  },
  onDidParseMarkdown: function (html) {
    return new Promise((resolve, reject) => {
      return resolve(html)
    })
  },
  onWillTransformMarkdown: function (markdown) {
    return new Promise((resolve, reject) => {
      return resolve(markdown);
    });
  },
  onDidTransformMarkdown: function (markdown) {
    return new Promise((resolve, reject) => {
      return resolve(markdown);
    });
  }
}
