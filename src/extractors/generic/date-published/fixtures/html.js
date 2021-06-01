const HTML = {
  displayDateMeta: {
    test: `
      <html>
        <head>
          <meta name="displaydate" value="1/1/2020 8:30 (EST)" />
        </head>
      </html>
    `,
    result: new Date('1/1/2020 8:30 (EST)'),
  },
  datePublishedMeta: {
    test: `
      <html>
        <head>
          <meta name="datepublished" value="2021-06-01T21:57:44.059324Z">
        </head>
      </html>
    `,
    result: new Date('2021-06-01T21:57:44.059324Z'),
  },
  datePublishedSelectors: {
    test: `
      <div>
        <div class="hentry">
          <div class="updated">
            1/1/2020 <span class="time">8:30am</span>
          </div>
        </head>
      </div>
    `,
    result: new Date('1/1/2020 8:30 am (EST)'),
  },
};

export default HTML;
