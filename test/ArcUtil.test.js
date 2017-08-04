/*
 * This file is part of the nivo project.
 *
 * Copyright 2016-present, Raphaël Benitte.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
import * as crap from '../src/index'

import { midAngle } from '../src/ArcUtils'

test('midAngle() should compute center of given angles', () => {
    expect(midAngle({ startAngle: 0, endAngle: 90 })).toBe(45)
})
