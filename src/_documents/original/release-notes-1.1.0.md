       /\* <!\[CDATA\[ */ .download { font-size: 80%; } table.download { width: 100%;} table.download tr td { border: 1px solid #ccc; padding: .5em; } /* \]\]> */  ActiveMQ Artemis

*   [ActiveMQ Artemis](index.html)
*   [Documentation](docs.md)
*   [Download](OverviewOverview/Overview/download.md)

![ActiveMQ logo](/images/activemq-logo.png)

ActiveMQ Artemis
================

Release Notes - Apache ActiveMQ Artemis 1.1.0
---------------------------------------------

A complete list of JIRAs for the 1.1.0 release can be found at the [Apache ActiveMQ Artemis project JIRA](https://issues.apache.org/jira/secure/ReleaseNote.jspa?version=12332642&styleName=Html&projectId=12315920&Create=Create&atl_token=A5KQ-2QAV-T4JA-FDED%7C708a588702fdb54724fe817fd07ee4c5610de292%7Clin)

Overall Apache ActiveMQ Artemis 1.1.0 has several improvements and it's a nice polish on top of Apache ActiveMQ Artemis 1.0.0, things like better examples, better OpenWire support and the first release of MQTT.

We would like to highlight the following accomplishments on this release:

*   \[[ARTEMIS-154](https://issues.apache.org/jira/browse/ARTEMIS-154)\] This is our first implementation of the MQTT support.
    
*   [ARTEMIS-178](https://issues.apache.org/jira/browse/ARTEMIS-178) The examples are now using the CLI to create and start servers reflecting real cases used in production. The documentation about the examples has been updated. Please refer to the documentation for more information about this.
    
*   \[[ARTEMIS-116](https://issues.apache.org/jira/browse/ARTEMIS-116)\] The CLI has been improved. There are new tools to compact the journal and we did a lot of polish around the CLI.
    
*   **Improvements on OpenWire** We fixed several issues around OpenWire
    

### Where we are still improving.

1.1.0 has improved a lot, and these are the areas we are still working on:

*   This is the first release with MQTT. We would like to hear from you if you have any issues around MQTT as we are continuously improving the MQTT support
    
*   Short list of what need to be implemented on OpenWire for future releases:
    *   Reconnection
    *   Better Flow Control on producers
    *   Compressed messages
    *   Optimized ACKs
    *   Streamlet support