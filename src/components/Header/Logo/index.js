import React from 'react';

class Logo extends React.Component {
  render() {
    const logoOpacity = this.props.showLogo ? 1 : 0;
    const iconOpacity = this.props.showIcon ? 1 : 0;
    return (
    <div style={{width: '100%'}}>
      <svg viewBox="0 0 1060 1060" version="1.1"style={{fillRule: 'evenodd', clipRule: 'evenodd', strokeLinejoin: 'round', strokeMiterlimit: '1.41421'}}>
        <g transform="matrix(1,0,0,1,-180.157,-423.983)">
          <g transform="matrix(1,0,0,1,-315.843,-149.017)">
            <rect x={496} y={573} width={1060} height={1060} style={{fill: this.props.fill || 'rgb(248,224,3)', opacity: logoOpacity, transition: 'all 1s'}} />
          </g>
          <g transform="matrix(2.93859,0,0,2.82375,-4412.44,-4178.19)" style={{transition: 'all 3s', opacity: iconOpacity}}>
            <path d="M1806,1974.2L1788,1974.2L1788,1946.42C1788,1941.04 1783.3,1936.68 1777.5,1936.68C1771.7,1936.68 1767,1941.04 1767,1946.42L1767,1974.2L1753.82,1974.2C1753.78,1974.21 1739.44,1978.48 1723.82,1978.2C1701.07,1977.8 1689.82,1971.2 1689.82,1971.2L1666.82,1971.2L1666.82,1963.2L1671.82,1959.2L1671.82,1866.2L1677.82,1866.2L1681.82,1861.2L1703.82,1861.2L1703.82,1852.2L1701.82,1852.2L1701.82,1849.2C1701.82,1849.2 1709.05,1843.19 1729.69,1843.2C1749.76,1843.21 1754.82,1849.2 1754.82,1849.2L1832.82,1849.2L1832.82,1834.2L1828.82,1834.2C1828.82,1834.2 1828.18,1831.99 1828.82,1831.2C1839.38,1818.07 1841.44,1807.15 1872.82,1807.12C1885.58,1807.1 1895.44,1808.15 1899.83,1813.68C1901.73,1817.31 1894.74,1820.88 1894.74,1820.88L1894.82,1959.2L1894.75,1976.2C1894.75,1976.2 1880.93,1981.47 1863.82,1981.2C1845.28,1980.91 1827.84,1974.21 1827.82,1974.2L1827,1974.2L1827,1946.42C1827,1941.04 1822.3,1936.68 1816.5,1936.68C1810.7,1936.68 1806,1941.04 1806,1946.42L1806,1974.2ZM1743.79,1897.87C1743.79,1895.85 1742.31,1894.5 1740.54,1894.2C1738.72,1893.89 1737.29,1895.44 1737.29,1897.46L1737.29,1908.29L1743.79,1908.7L1743.79,1897.87ZM1710.09,1897.87C1710.09,1895.85 1711.25,1894.5 1712.63,1894.2C1714.05,1893.89 1715.16,1895.44 1715.16,1897.46L1715.16,1908.29L1710.09,1908.7L1710.09,1897.87ZM1769.71,1908.41L1769.71,1899.08C1769.71,1897.33 1768.18,1895.91 1766.3,1895.91C1764.42,1895.91 1762.89,1897.33 1762.89,1899.08L1762.89,1908.41L1769.71,1908.41ZM1782.91,1908.41L1782.91,1899.08C1782.91,1897.33 1781.38,1895.91 1779.5,1895.91C1777.62,1895.91 1776.09,1897.33 1776.09,1899.08L1776.09,1908.41L1782.91,1908.41ZM1795.91,1908.41L1795.91,1899.08C1795.91,1897.33 1794.38,1895.91 1792.5,1895.91C1790.62,1895.91 1789.09,1897.33 1789.09,1899.08L1789.09,1908.41L1795.91,1908.41ZM1807.91,1908.41L1807.91,1899.08C1807.91,1897.33 1806.38,1895.91 1804.5,1895.91C1802.62,1895.91 1801.09,1897.33 1801.09,1899.08L1801.09,1908.41L1807.91,1908.41ZM1819.91,1908.41L1819.91,1899.08C1819.91,1897.33 1818.38,1895.91 1816.5,1895.91C1814.62,1895.91 1813.09,1897.33 1813.09,1899.08L1813.09,1908.41L1819.91,1908.41ZM1831.91,1908.41L1831.91,1899.08C1831.91,1897.33 1830.38,1895.91 1828.5,1895.91C1826.62,1895.91 1825.09,1897.33 1825.09,1899.08L1825.09,1908.41L1831.91,1908.41ZM1729.95,1908.4L1729.95,1897.77C1729.95,1895.78 1728.21,1894.16 1726.07,1894.16C1723.92,1894.16 1722.18,1895.78 1722.18,1897.77L1722.18,1908.4L1729.95,1908.4ZM1857,1897.3C1857,1895.27 1858.48,1893.93 1860.25,1893.63C1862.07,1893.32 1863.5,1894.86 1863.5,1896.89L1863.5,1907.72L1857,1908.13L1857,1897.3ZM1889.15,1897.3C1889.15,1895.27 1888.32,1893.93 1887.33,1893.63C1886.3,1893.32 1885.5,1894.86 1885.5,1896.89L1885.5,1907.72L1889.15,1908.13L1889.15,1897.3ZM1880.38,1907.51L1880.38,1896.87C1880.38,1894.88 1878.64,1893.26 1876.5,1893.26C1874.36,1893.26 1872.62,1894.88 1872.62,1896.87L1872.62,1907.51L1880.38,1907.51ZM1889.15,1865.2C1889.15,1863.18 1888.32,1861.83 1887.33,1861.54C1886.3,1861.23 1885.5,1862.77 1885.5,1864.79L1885.5,1875.63L1889.15,1876.04L1889.15,1865.2ZM1857,1865.2C1857,1863.18 1858.48,1861.83 1860.25,1861.54C1862.07,1861.23 1863.5,1862.77 1863.5,1864.79L1863.5,1875.63L1857,1876.04L1857,1865.2ZM1880.38,1875.51L1880.38,1864.87C1880.38,1862.88 1878.64,1861.26 1876.5,1861.26C1874.36,1861.26 1872.62,1862.88 1872.62,1864.87L1872.62,1875.51L1880.38,1875.51ZM1831.91,1875.41L1831.91,1866.08C1831.91,1864.33 1830.38,1862.91 1828.5,1862.91C1826.62,1862.91 1825.09,1864.33 1825.09,1866.08L1825.09,1875.41L1831.91,1875.41ZM1819.91,1875.41L1819.91,1866.08C1819.91,1864.33 1818.38,1862.91 1816.5,1862.91C1814.62,1862.91 1813.09,1864.33 1813.09,1866.08L1813.09,1875.41L1819.91,1875.41ZM1807.91,1875.41L1807.91,1866.08C1807.91,1864.33 1806.38,1862.91 1804.5,1862.91C1802.62,1862.91 1801.09,1864.33 1801.09,1866.08L1801.09,1875.41L1807.91,1875.41ZM1794.91,1875.41L1794.91,1866.08C1794.91,1864.33 1793.38,1862.91 1791.5,1862.91C1789.62,1862.91 1788.09,1864.33 1788.09,1866.08L1788.09,1875.41L1794.91,1875.41ZM1782.91,1875.41L1782.91,1866.08C1782.91,1864.33 1781.38,1862.91 1779.5,1862.91C1777.62,1862.91 1776.09,1864.33 1776.09,1866.08L1776.09,1875.41L1782.91,1875.41ZM1769.91,1875.41L1769.91,1866.08C1769.91,1864.33 1768.38,1862.91 1766.5,1862.91C1764.62,1862.91 1763.09,1864.33 1763.09,1866.08L1763.09,1875.41L1769.91,1875.41ZM1743.79,1863.29C1743.79,1861.26 1742.31,1859.92 1740.54,1859.62C1738.72,1859.31 1737.29,1860.85 1737.29,1862.88L1737.29,1873.71L1743.79,1874.12L1743.79,1863.29ZM1710.09,1863.29C1710.09,1861.26 1711.25,1859.92 1712.63,1859.62C1714.05,1859.31 1715.16,1860.85 1715.16,1862.88L1715.16,1873.71L1710.09,1874.12L1710.09,1863.29ZM1730.2,1873.86L1730.2,1863.22C1730.2,1861.23 1728.46,1859.61 1726.32,1859.61C1724.17,1859.61 1722.43,1861.23 1722.43,1863.22L1722.43,1873.86L1730.2,1873.86ZM1890.97,1828.91C1890.97,1826.88 1890.14,1825.54 1889.15,1825.24C1888.13,1824.93 1887.33,1826.47 1887.33,1828.5L1887.33,1839.33L1890.97,1839.74L1890.97,1828.91ZM1857,1828.91C1857,1826.88 1858.48,1825.54 1860.25,1825.24C1862.07,1824.93 1863.5,1826.47 1863.5,1828.5L1863.5,1839.33L1857,1839.74L1857,1828.91ZM1880.38,1839.15L1880.38,1828.51C1880.38,1826.52 1878.64,1824.9 1876.5,1824.9C1874.36,1824.9 1872.62,1826.52 1872.62,1828.51L1872.62,1839.15L1880.38,1839.15Z" style={{fill: 'rgb(1,1,1)'}} />
          </g>
        </g>
      </svg>
    </div>
    )
  }
}

export default Logo