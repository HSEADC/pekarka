import Airtable from "airtable";

const token = 'pat410caVWfRvCo9f.6bc5a7c54d47a0b85c5f79386bc3f45f8cbf1e895fc5b7b8731ddc080ced9919'

Airtable.configure({
    endpointUrl: 'https://api.airtable.com',
    apiKey: token
});
var base = Airtable.base('appeUHvKsTgvEEYN1');

function getPostTeasers() {
  return new Promise((resolve, reject) => {
    const content = [];

    base('Articles')
      .select({ maxRecords: 100 })
      .firstPage()
      .then((result) => {
        result.forEach((record) => {
          content.push({
            id: record.id,
            title: record.fields['Title'],
            description: record.fields['Description'],
            tag: record.fields['Tag'],
            time: record.fields ['Time'],
            image: record.fields['Image'],
            url: record.fields['Url']
          });
        });

        resolve(content);
      });
  });
}

export { getPostTeasers };