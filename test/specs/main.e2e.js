describe('Main page', () => {
    it('Verify list items', () => {
        browser.url('/');

        const listExamples =  $$("ul li") //find elements

        expect(listExamples).toBeElementsArrayOfSize({gte: 1});
    });
});