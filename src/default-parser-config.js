/**
 * Default parser configuration.
 *
 * @type {typedefs.openaipOpenairParser.ParserConfig}
 */
module.exports = {
    airspaceClasses: [
        // default ICAO classes
        'A',
        'B',
        'C',
        'D',
        'E',
        'F',
        'G',
        // classes commonly found in openair files
        'R',
        'D',
        'Q',
        'WAVE',
        'GLIDING',
        'RMZ',
        'TMZ',
        'CTR',
    ],
    unlimited: 999,
    geometryDetail: 50,
    keepOriginal: false,
};
