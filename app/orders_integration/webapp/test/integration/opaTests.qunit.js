sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'ordersintegration/test/integration/FirstJourney',
		'ordersintegration/test/integration/pages/Orders_AribaList',
		'ordersintegration/test/integration/pages/Orders_AribaObjectPage'
    ],
    function(JourneyRunner, opaJourney, Orders_AribaList, Orders_AribaObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('ordersintegration') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheOrders_AribaList: Orders_AribaList,
					onTheOrders_AribaObjectPage: Orders_AribaObjectPage
                }
            },
            opaJourney.run
        );
    }
);