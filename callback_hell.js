// Problems with callback
// 1) maintability
// 2) Errors are hard to handle
// 3) Mixing input and output


httpGet('/stories/' + storyId, function (story)	{
    httpGet(story.chapterUrls[0], function (chapter)	{
            httpGet(chapter.pageUrls[0], function (page)	{
            var chapterJSON = JSON.parse(chapter);
            displayChapter(chapterJSON);
    });
})