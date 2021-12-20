describe( 'Dynamic Loading Page', () => {
    it('wait for the hidden element to be show', () => {
        const btnStart = $("#start button");
        const textFinish = $("#finish h4");
        const elLoading = $("#loading");

        // browser.setTimeout({ 'pageLoad': 10000 })

        browser.url('/dynamic_loading/1');

        btnStart.click();

        elLoading.waitForDisplayed();

        elLoading.waitForDisplayed({reverse: true});

        expect(textFinish.getText()).toEqual("Hello World!");

    });
});