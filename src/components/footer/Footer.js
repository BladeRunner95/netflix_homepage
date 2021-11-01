import React from "react";
import styles from './Footer.module.css';

export default function Footer () {
    const footerLinks = [
        {
            name: 'FAQ',
            link: 'https://help.netflix.com/support/412'
        },
        {
            name: 'Investor Relations',
            link: 'http://ir.netflix.com/'
        },
        {
            name: 'Privacy',
            link: 'https://help.netflix.com/legal/privacy'
        },
        {
            name: 'Speed Test',
            link: 'https://fast.com'
        },
        {
            name: 'Help Center',
            link: 'https://help.netflix.com'
        },
        {
            name: 'Jobs',
            link: 'https://jobs.netflix.com/jobs'
        },
        {
            name: 'Cookie Preferences',
            link: '#'
        },
        {
            name: 'Legal Notices',
            link: 'https://help.netflix.com/legal/notices'
        },
        {
            name: 'Account',
            link: '/youraccount'
        },
        {
            name: 'Ways to Watch',
            link: '/watch'
        },
        {
            name: 'Corporate Information',
            link: 'https://help.netflix.com/legal/corpinfo'
        },
        {
            name: 'Only on Netflix',
            link: 'https://www.netflix.com/il-en/browse/genre/839338'
        },
        {
            name: 'Media Center',
            link: 'https://media.netflix.com/'
        },
        {
            name: 'Terms of Use',
            link: 'https://help.netflix.com/legal/termsofuse'
        },
        {
            name: 'Contact Us',
            link: 'https://help.netflix.com/contactus'
        }
]

    return (
        <div className={styles.mainWrapper}>
            <div className={styles.innerWrapper}>
                <div className={styles.siteFooter}>
                    <p className={styles.title}>
                        <a className={styles.titleLink} href="https://help.netflix.com/contactus">Questions? Contact us.</a>
                    </p>
                    <ul className={styles.footerLinks}>
                        {footerLinks.map((link, index) => {
                            return <li key={index} className={styles.singleLink}>
                                <a className={styles.singleLinkA} href={link.link}>
                                 <span>{link.name}</span>
                                </a>
                            </li>
                        })}
                    </ul>
                    <div className={styles.langSelection}>
                        <div className={styles.langButtonInner}>
                            <label className={styles.label} htmlFor="lang-switcher-select">
                                <span className={styles.labelSpan}>Select Language</span>
                            </label>
                            <div className={styles.selectArrow}>
                                <select className={styles.select} id="lang-switcher-select" placeholder="lang-switcher">
                                    <option value="/il-en">English</option>
                                    <option value="/il-he">Hebrew</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <p className={styles.country}>Netflix North Korea</p>
                </div>
            </div>
        </div>
    )
}