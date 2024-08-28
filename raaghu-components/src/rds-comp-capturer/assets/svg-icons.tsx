import React from "react";

export interface IconProps {
    stroke?: string;
    onClick?: (event: any) => void;
    offset?: string;
    classes?: string;
    title?: string;
    width?: string;
    height?: string;
}

export const HomeIcon: React.FC<IconProps> = (props) => (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M0.905762 9L8.90576 1L16.9058 9M3.3673 10.8462V17H14.4442V10.8462" />
    </svg>
);

export const MessagesIcon: React.FC = () => (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M14.2159 0.546466L14.2159 0.546332H14.2043H2.2051V0.546197L2.19351 0.546466C1.78972 0.555834 1.40617 0.725112 1.12712 1.01711C0.855475 1.30136 0.704492 1.67926 0.704917 2.0716C0.698323 1.66495 0.852148 1.27189 1.13332 0.977672C1.41553 0.682369 1.80302 0.510708 2.2112 0.5H14.1982C14.6064 0.510708 14.9939 0.682368 15.2761 0.977672C15.5572 1.27185 15.7111 1.66483 15.7045 2.07142C15.7049 1.67914 15.5539 1.30131 15.2823 1.01711C15.0033 0.725112 14.6197 0.555834 14.2159 0.546466ZM0.705232 15.4758V15.4603L1.56664 14.5589L3.56651 12.4663L3.56652 12.4663L3.56845 12.4642C3.70392 12.3209 3.8671 12.2065 4.04809 12.1281C4.22881 12.0498 4.42352 12.009 4.62046 12.0081H14.2043V12.0082L14.2159 12.0079C14.6197 11.9985 15.0033 11.8293 15.2823 11.5373C15.5539 11.2531 15.7049 10.8752 15.7045 10.483C15.7111 10.8896 15.5572 11.2825 15.2761 11.5767C14.9939 11.872 14.6064 12.0437 14.1982 12.0544L4.61855 12.0544L4.61725 12.0544C4.4168 12.0549 4.21857 12.0963 4.03464 12.176C3.85133 12.2554 3.68607 12.3712 3.54887 12.5164C3.54841 12.5169 3.54796 12.5174 3.5475 12.5179L0.70577 15.4911C0.705306 15.4897 0.705078 15.4883 0.70511 15.4869L0.705232 15.4869V15.4758ZM8.78336 5.77245L8.9747 5.31051L8.78336 5.77245C8.84964 5.7999 8.90987 5.84014 8.9606 5.89088L9.31416 5.53732L8.9606 5.89088C9.01134 5.94161 9.05158 6.00183 9.07903 6.06812C9.10649 6.1344 9.12062 6.20545 9.12062 6.27719C9.12062 6.38524 9.08858 6.49087 9.02855 6.58072C8.96852 6.67056 8.88319 6.74059 8.78336 6.78194C8.68353 6.82329 8.57368 6.83411 8.4677 6.81303C8.36173 6.79195 8.26438 6.73991 8.18797 6.66351C8.11157 6.5871 8.05953 6.48975 8.03845 6.38378C8.01737 6.2778 8.02819 6.16795 8.06954 6.06812C8.11089 5.96829 8.18092 5.88296 8.27076 5.82293C8.36061 5.7629 8.46623 5.73086 8.57429 5.73086C8.64603 5.73086 8.71708 5.74499 8.78336 5.77245ZM4.93609 6.27719C4.93609 6.38525 4.90405 6.49087 4.84402 6.58072C4.78399 6.67056 4.69866 6.74059 4.59883 6.78194C4.499 6.82329 4.38915 6.83411 4.28318 6.81303C4.1772 6.79195 4.07985 6.73991 4.00345 6.66351C3.92704 6.5871 3.87501 6.48975 3.85393 6.38378C3.83285 6.2778 3.84366 6.16795 3.88502 6.06812C3.92637 5.96829 3.99639 5.88296 4.08623 5.82293C4.17608 5.7629 4.28171 5.73086 4.38976 5.73086C4.53466 5.73086 4.67362 5.78842 4.77608 5.89088C4.87853 5.99333 4.93609 6.13229 4.93609 6.27719ZM12.2541 6.06812L11.7921 5.87678L12.2541 6.06812C12.2954 5.96829 12.3654 5.88296 12.4553 5.82293C12.5451 5.7629 12.6508 5.73086 12.7588 5.73086C12.9037 5.73086 13.0427 5.78842 13.1451 5.89088C13.2476 5.99333 13.3051 6.13229 13.3051 6.27719C13.3051 6.38525 13.2731 6.49088 13.2131 6.58072C13.153 6.67056 13.0677 6.74058 12.9679 6.78194C12.8681 6.82329 12.7582 6.83411 12.6522 6.81303C12.5463 6.79195 12.4489 6.73991 12.3725 6.66351C12.2961 6.5871 12.2441 6.48975 12.223 6.38377C12.2019 6.2778 12.2127 6.16795 12.2541 6.06812Z"/>
    </svg>
);

export const NewsIcon: React.FC = () => (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M8.51052 3.77533H10.5977M8.51052 5.85722H10.5977M8.51052 7.93912H10.5977M2.94573 10.0201H10.5977M2.94573 12.102H10.5977M2.94573 14.1839H10.5977M14.7713 16.9592H2.94572C2.67163 16.9592 2.40021 16.9054 2.14698 16.8008C1.89375 16.6961 1.66366 16.5428 1.46985 16.3495C1.27603 16.1562 1.12229 15.9266 1.0174 15.6741C0.912508 15.4215 0.858521 15.1508 0.858521 14.8774V1.69423C0.858521 1.51011 0.931849 1.33353 1.06237 1.20333C1.1929 1.07314 1.36993 1 1.55452 1H11.9889C12.1735 1 12.3505 1.07314 12.4811 1.20333C12.6116 1.33353 12.6849 1.51011 12.6849 1.69423V14.8774C12.6795 15.1541 12.7294 15.4292 12.8319 15.6865C12.9343 15.9438 13.0872 16.1781 13.2815 16.3758C13.4758 16.5734 13.7077 16.7304 13.9636 16.8376C14.2194 16.9448 14.4942 17 14.7717 17C15.0493 17 15.324 16.9448 15.5799 16.8376C15.8358 16.7304 16.0677 16.5734 16.262 16.3758C16.4563 16.1781 16.6091 15.9438 16.7116 15.6865C16.814 15.4292 16.864 15.1541 16.8585 14.8774V3.08188M14.7713 3.08189V15.2245M7.11933 7.59199C7.11933 7.68405 7.08266 7.77234 7.0174 7.83743C6.95214 7.90253 6.86362 7.9391 6.77133 7.9391H3.29373C3.24803 7.9391 3.20278 7.93012 3.16055 7.91268C3.11833 7.89523 3.07997 7.86967 3.04765 7.83743C3.01534 7.8052 2.98971 7.76694 2.97222 7.72482C2.95473 7.68271 2.94573 7.63757 2.94573 7.59199V4.12245C2.94573 4.03039 2.98239 3.9421 3.04765 3.877C3.11292 3.81191 3.20143 3.77533 3.29373 3.77533H6.77213C6.86442 3.77533 6.95294 3.81191 7.0182 3.877C7.08346 3.9421 7.12013 4.03039 7.12013 4.12245L7.11933 7.59199Z"/>
    </svg>
);

export const HelpIcon: React.FC = () => (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M7.23388 7.1528C7.2342 6.78791 7.34264 6.4313 7.54553 6.12804C7.74842 5.82478 8.03664 5.58847 8.37376 5.44898C8.71089 5.30949 9.08182 5.27308 9.43964 5.34434C9.79745 5.41561 10.1261 5.59135 10.3841 5.84937C10.6421 6.10738 10.8178 6.43609 10.889 6.79395C10.9603 7.15181 10.9239 7.52277 10.7844 7.85994C10.6449 8.19712 10.4087 8.48537 10.1054 8.68829C9.80222 8.89121 9.44566 8.99968 9.08082 9V10.2304M9.07682 1C7.63028 1.00147 6.21121 1.39523 4.97069 2.13936C3.73017 2.8835 2.71462 3.95014 2.03217 5.22575C1.34972 6.50136 1.02591 7.93818 1.09521 9.38326C1.16451 10.8283 1.62434 12.2276 2.42572 13.432L1.08191 17L5.5717 16.188C6.6534 16.7165 7.84041 16.9941 9.04428 16.9999C10.2482 17.0057 11.4378 16.7397 12.5246 16.2217C13.6113 15.7036 14.5671 14.9469 15.3208 14.008C16.0744 13.069 16.6064 11.972 16.8771 10.7988C17.1478 9.6256 17.1502 8.40641 16.8842 7.23212C16.6181 6.05784 16.0905 4.95876 15.3406 4.01683C14.5907 3.0749 13.6379 2.31441 12.5532 1.79205C11.4685 1.26969 10.2799 0.998952 9.07601 1H9.07682ZM9.08083 12.076C8.8982 12.0755 8.71952 12.1292 8.56743 12.2304C8.41533 12.3315 8.29664 12.4754 8.22638 12.644C8.15613 12.8127 8.13747 12.9983 8.17275 13.1775C8.20803 13.3568 8.29568 13.5215 8.4246 13.6509C8.55352 13.7802 8.7179 13.8685 8.89697 13.9044C9.07604 13.9403 9.26174 13.9223 9.43057 13.8526C9.59939 13.7829 9.74375 13.6647 9.84538 13.5129C9.94701 13.3612 10.0013 13.1827 10.0015 13C9.99862 12.7564 9.90079 12.5235 9.72884 12.3509C9.55689 12.1784 9.3244 12.0797 9.08083 12.076Z"/>
    </svg>
);

export const BugIcon: React.FC = () => (
    <svg width="21" height="21" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M21.4808 11.1381H19.9423V9.65677H21.4808C21.6848 9.65677 21.8804 9.7348 22.0247 9.87371C22.169 10.0126 22.25 10.201 22.25 10.3974C22.25 10.5939 22.169 10.7823 22.0247 10.9212C21.8804 11.0601 21.6848 11.1381 21.4808 11.1381ZM3.01923 9.65677C2.81522 9.65677 2.61956 9.7348 2.4753 9.87371C2.33104 10.0126 2.25 10.201 2.25 10.3974C2.25 10.5939 2.33104 10.7823 2.4753 10.9212C2.61956 11.0601 2.81522 11.1381 3.01923 11.1381H4.55769V9.65677H3.01923ZM19.9423 14.8415C19.9423 15.0915 19.9288 15.3387 19.9038 15.5821H21.4808C21.6848 15.5821 21.8804 15.6602 22.0247 15.7991C22.169 15.938 22.25 16.1264 22.25 16.3228C22.25 16.5193 22.169 16.7077 22.0247 16.8466C21.8804 16.9855 21.6848 17.0635 21.4808 17.0635H19.5885C19.0976 18.5674 18.1213 19.8812 16.8015 20.814C15.4816 21.7467 13.8872 22.2496 12.25 22.2496C10.6128 22.2496 9.01837 21.7467 7.69854 20.814C6.37871 19.8812 5.40237 18.5674 4.91154 17.0635H3.01923C2.81522 17.0635 2.61956 16.9855 2.4753 16.8466C2.33104 16.7077 2.25 16.5193 2.25 16.3228C2.25 16.1264 2.33104 15.938 2.4753 15.7991C2.61956 15.6602 2.81522 15.5821 3.01923 15.5821H4.59615C4.57115 15.3387 4.55769 15.0915 4.55769 14.8415V14.1008H3.01923C2.81522 14.1008 2.61956 14.0228 2.4753 13.8839C2.33104 13.745 2.25 13.5566 2.25 13.3601C2.25 13.1637 2.33104 12.9753 2.4753 12.8364C2.61956 12.6975 2.81522 12.6195 3.01923 12.6195H4.55769V11.1381H19.9423V12.6195H21.4808C21.6848 12.6195 21.8804 12.6975 22.0247 12.8364C22.169 12.9753 22.25 13.1637 22.25 13.3601C22.25 13.5566 22.169 13.745 22.0247 13.8839C21.8804 14.0228 21.6848 14.1008 21.4808 14.1008H19.9423V14.8415ZM13.0192 13.3601C13.0192 13.1637 12.9382 12.9753 12.7939 12.8364C12.6497 12.6975 12.454 12.6195 12.25 12.6195C12.046 12.6195 11.8503 12.6975 11.7061 12.8364C11.5618 12.9753 11.4808 13.1637 11.4808 13.3601V19.2855C11.4808 19.482 11.5618 19.6703 11.7061 19.8092C11.8503 19.9482 12.046 20.0262 12.25 20.0262C12.454 20.0262 12.6497 19.9482 12.7939 19.8092C12.9382 19.6703 13.0192 19.482 13.0192 19.2855V13.3601ZM6.65769 5.31921C5.49108 6.50565 4.76606 8.03113 4.59615 9.65677H19.9038C19.7339 8.03113 19.0089 6.50565 17.8423 5.31921L19.7173 3.51474C19.8616 3.37576 19.9427 3.18727 19.9427 2.99072C19.9427 2.79417 19.8616 2.60567 19.7173 2.46669C19.573 2.32771 19.3772 2.24963 19.1731 2.24963C18.969 2.24963 18.7732 2.32771 18.6288 2.46669L16.6779 4.34615C15.3831 3.46421 13.836 2.99062 12.25 2.99062C10.664 2.99062 9.11694 3.46421 7.82212 4.34615L5.87115 2.46669C5.72681 2.32771 5.53105 2.24963 5.32692 2.24963C5.1228 2.24963 4.92703 2.32771 4.78269 2.46669C4.63835 2.60567 4.55726 2.79417 4.55726 2.99072C4.55726 3.18727 4.63835 3.37576 4.78269 3.51474L6.65769 5.31921Z" fill="#B40101" stroke="none" />
    </svg>
);

export const FeatureRequestIcon: React.FC = () => (
    <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10.2511 0.25C8.52443 0.249623 6.8271 0.696239 5.3243 1.54637C3.8215 2.39651 2.56441 3.6212 1.67541 5.10125C0.786406 6.5813 0.295767 8.26627 0.25125 9.99217C0.206733 11.7181 0.609853 13.4261 1.42137 14.95L0.329923 18.224C0.239515 18.4951 0.226395 18.786 0.292033 19.0641C0.357671 19.3422 0.499473 19.5965 0.701547 19.7986C0.90362 20.0007 1.15798 20.1424 1.43611 20.2081C1.71425 20.2737 2.00517 20.2606 2.27626 20.1702L5.55062 19.0788C6.89187 19.7922 8.37802 20.1906 9.89625 20.2438C11.4145 20.2971 12.9249 20.0038 14.3129 19.3863C15.7008 18.7687 16.9298 17.8431 17.9066 16.6797C18.8834 15.5163 19.5823 14.1457 19.9502 12.6719C20.3181 11.1981 20.3454 9.65981 20.03 8.17388C19.7146 6.68795 19.0648 5.2934 18.1299 4.09607C17.195 2.89875 15.9996 1.93012 14.6345 1.26371C13.2693 0.597297 11.7702 0.250623 10.2511 0.25ZM13.3283 12.5577H7.17385C6.96982 12.5577 6.77414 12.4766 6.62987 12.3324C6.4856 12.1881 6.40454 11.9925 6.40454 11.7885C6.40454 11.5844 6.4856 11.3888 6.62987 11.2445C6.77414 11.1003 6.96982 11.0192 7.17385 11.0192H13.3283C13.5323 11.0192 13.728 11.1003 13.8723 11.2445C14.0165 11.3888 14.0976 11.5844 14.0976 11.7885C14.0976 11.9925 14.0165 12.1881 13.8723 12.3324C13.728 12.4766 13.5323 12.5577 13.3283 12.5577ZM13.3283 9.48077H7.17385C6.96982 9.48077 6.77414 9.39973 6.62987 9.25547C6.4856 9.11121 6.40454 8.91555 6.40454 8.71154C6.40454 8.50753 6.4856 8.31187 6.62987 8.16761C6.77414 8.02335 6.96982 7.94231 7.17385 7.94231H13.3283C13.5323 7.94231 13.728 8.02335 13.8723 8.16761C14.0165 8.31187 14.0976 8.50753 14.0976 8.71154C14.0976 8.91555 14.0165 9.11121 13.8723 9.25547C13.728 9.39973 13.5323 9.48077 13.3283 9.48077Z" fill="#7E2EEF" stroke="none" />
    </svg>
);

export const SendMessageIcon: React.FC = () => (
    <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9.20851 10.7903C9.20851 10.1554 9.43268 9.54642 9.83169 9.09744C10.2307 8.64845 10.7719 8.39621 11.3362 8.39621H17.5064C17.5628 8.39621 17.6169 8.37099 17.6568 8.32609C17.6967 8.28119 17.7192 8.2203 17.7192 8.1568V2.17147C17.7192 1.79049 17.5847 1.42511 17.3452 1.15572C17.1058 0.886328 16.7811 0.734985 16.4426 0.734985H1.97447C1.6359 0.734985 1.31119 0.886328 1.07178 1.15572C0.832374 1.42511 0.697876 1.79049 0.697876 2.17147V11.748C0.697876 12.129 0.832374 12.4944 1.07178 12.7637C1.31119 13.0331 1.6359 13.1845 1.97447 13.1845H3.25107V16.5363C3.25107 16.6633 3.2959 16.7851 3.3757 16.8748C3.45551 16.9646 3.56374 17.0151 3.6766 17.0151C3.73241 17.0159 3.78774 17.0035 3.83904 16.9787C3.89034 16.954 3.93648 16.9174 3.97447 16.8714L7.29362 13.1845H8.99575C9.05218 13.1845 9.10629 13.1593 9.1462 13.1144C9.1861 13.0695 9.20851 13.0086 9.20851 12.9451V10.7903Z" fill="#F0BB01" stroke="none" />
        <path d="M19.8468 9.83269H11.3362C11.1105 9.83269 10.894 9.93359 10.7344 10.1132C10.5748 10.2928 10.4851 10.5364 10.4851 10.7903V16.5363C10.4851 16.7903 10.5748 17.0338 10.7344 17.2134C10.894 17.393 11.1105 17.4939 11.3362 17.4939H15.166L18.2894 20.6159C18.3511 20.6769 18.4272 20.7165 18.5084 20.7299C18.5897 20.7433 18.6727 20.73 18.7474 20.6915C18.8221 20.653 18.8853 20.5911 18.9293 20.5131C18.9734 20.4351 18.9965 20.3444 18.9957 20.252V17.4939H19.8468C20.0725 17.4939 20.289 17.393 20.4486 17.2134C20.6082 17.0338 20.6979 16.7903 20.6979 16.5363V10.7903C20.6979 10.5364 20.6082 10.2928 20.4486 10.1132C20.289 9.93359 20.0725 9.83269 19.8468 9.83269Z" fill="#F0BB01" stroke="none" />
    </svg>
);

export const ReleaseUpdatesIcon: React.FC = () => (
    <svg width="21" height="21" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M10.957 2.44346C11.5266 1.85218 12.4734 1.85218 13.043 2.44346L14.2304 3.67591L15.875 3.20228C16.6639 2.97504 17.4839 3.44842 17.6816 4.24531L18.0936 5.90635L19.7547 6.31844C20.5516 6.51614 21.025 7.33604 20.7977 8.12502L20.3241 9.76957L21.5565 10.957C22.1479 11.5266 22.1479 12.4734 21.5565 13.043L20.3241 14.2304L20.7977 15.875C21.025 16.664 20.5516 17.4839 19.7547 17.6816L18.0936 18.0937L17.6816 19.7547C17.4839 20.5516 16.6639 21.0249 15.875 20.7978L14.2304 20.324L13.043 21.5566C12.4734 22.1478 11.5266 22.1478 10.957 21.5566L9.76957 20.324L8.12503 20.7978C7.33605 21.0249 6.51613 20.5516 6.31843 19.7547L5.90634 18.0937L4.24532 17.6816C3.44842 17.4839 2.97504 16.664 3.20228 15.875L3.67592 14.2304L2.44346 13.043C1.85218 12.4734 1.85218 11.5266 2.44346 10.957L3.67592 9.76957L3.20228 8.12502C2.97504 7.33604 3.44842 6.51614 4.24532 6.31844L5.90634 5.90635L6.31843 4.24531C6.51613 3.44842 7.33605 2.97504 8.12503 3.20228L9.76957 3.67591L10.957 2.44346ZM16.4226 9.96298C16.7973 9.49452 16.7214 8.81094 16.2529 8.43616C15.7845 8.06138 15.1009 8.13735 14.7261 8.60581L10.4594 13.9392L8.83948 12.7243C8.35954 12.3643 7.67866 12.4616 7.3187 12.9415C6.95874 13.4215 7.05601 14.1023 7.53595 14.4623L9.99817 16.3089C10.4675 16.661 11.1316 16.5767 11.4982 16.1185L16.4226 9.96298Z" fill="#00C62B" stroke="none" />
    </svg>
);

export const BackIcon: React.FC<IconProps> = (props) => (
    <svg width="8" height="14" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={props.onClick} className={props.classes}>
        <path d="M9 1L1.19212 8.56958C1.13542 8.61468 1.08847 8.67534 1.05512 8.74648C1.02178 8.81763 1.003 8.89725 1.00033 8.97881C0.997662 9.06037 1.01118 9.14151 1.03977 9.21558C1.06836 9.28964 1.11121 9.35449 1.16479 9.40479L1.19212 9.4312L9 17" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

export const ScreenshotIcon: React.FC<IconProps> = (props) => (
    <svg width="14" height="14" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" >
        <path d="M5.57143 1C5.57143 1 4.00385 1.00002 2.42244 1.10353C1.71129 1.15008 1.1503 1.71098 1.10368 2.42213C1 4.00373 1 5.57143 1 5.57143M12.4286 1C12.4286 1 13.9962 1.00002 15.5776 1.10353C16.2887 1.15008 16.8497 1.71098 16.8963 2.42213C17 4.00373 17 5.57143 17 5.57143M12.4286 17C12.4286 17 13.9962 17 15.5776 16.8965C16.2887 16.8499 16.8497 16.289 16.8963 15.5779C17 13.9963 17 12.4286 17 12.4286M5.57143 17C5.57143 17 4.00385 17 2.42244 16.8965C1.71129 16.8499 1.1503 16.289 1.10368 15.5779C1 13.9963 1 12.4286 1 12.4286M6.46975 5.61497C6.0768 5.62941 5.73695 5.64606 5.45013 5.6627C4.76099 5.70267 4.21562 6.22823 4.15623 6.91596C4.10053 7.56118 4.04762 8.42556 4.04762 9.38095C4.04762 10.3363 4.10053 11.2007 4.15623 11.8459C4.21562 12.5337 4.76099 13.0592 5.45013 13.0992C6.23531 13.1448 7.41771 13.1905 9 13.1905C10.5823 13.1905 11.7647 13.1448 12.5499 13.0992C13.239 13.0592 13.7844 12.5337 13.8438 11.8459C13.8995 11.2007 13.9524 10.3363 13.9524 9.38095C13.9524 8.42556 13.8995 7.56118 13.8438 6.91596C13.7844 6.22823 13.239 5.70267 12.5499 5.6627C12.263 5.64606 11.9232 5.62941 11.5302 5.61497L11.1853 4.7616C11.033 4.38495 10.692 4.11859 10.2867 4.09029C9.96286 4.06766 9.52731 4.04762 9 4.04762C8.47269 4.04762 8.03714 4.06766 7.7133 4.09029C7.30804 4.11859 6.96701 4.38495 6.81474 4.7616L6.46975 5.61497ZM7.09524 9C7.09524 9.25014 7.14451 9.49783 7.24023 9.72892C7.33595 9.96002 7.47626 10.17 7.65313 10.3469C7.83 10.5237 8.03998 10.664 8.27108 10.7598C8.50218 10.8555 8.74986 10.9048 9 10.9048C9.25014 10.9048 9.49783 10.8555 9.72892 10.7598C9.96002 10.664 10.17 10.5237 10.3469 10.3469C10.5237 10.17 10.664 9.96002 10.7598 9.72892C10.8555 9.49783 10.9048 9.25014 10.9048 9C10.9048 8.74986 10.8555 8.50218 10.7598 8.27108C10.664 8.03998 10.5237 7.83 10.3469 7.65313C10.17 7.47626 9.96002 7.33595 9.72892 7.24023C9.49783 7.14451 9.25014 7.09524 9 7.09524C8.74986 7.09524 8.50218 7.14451 8.27108 7.24023C8.03998 7.33595 7.83 7.47626 7.65313 7.65313C7.47626 7.83 7.33595 8.03998 7.24023 8.27108C7.14451 8.50218 7.09524 8.74986 7.09524 9Z" stroke={props.stroke} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

export const VideoIcon: React.FC<IconProps> = (props) => (
    <svg width="14" height="14" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" >
        <path d="M8.30435 10.0435H1.69565C1.51115 10.0435 1.33421 9.97019 1.20375 9.83973C1.07329 9.70927 1 9.53232 1 9.34783V1.69565C1 1.51115 1.07329 1.33421 1.20375 1.20375C1.33421 1.07329 1.51115 1 1.69565 1H10.7391C10.9236 1 11.1006 1.07329 11.231 1.20375C11.3615 1.33421 11.4348 1.51115 11.4348 1.69565V7.58226M8.65217 13.1739C8.65217 14.1887 9.05528 15.1618 9.77281 15.8794C10.4903 16.5969 11.4635 17 12.4783 17C13.493 17 14.4662 16.5969 15.1837 15.8794C15.9012 15.1618 16.3043 14.1887 16.3043 13.1739C16.3043 12.1592 15.9012 11.186 15.1837 10.4685C14.4662 9.75093 13.493 9.34783 12.4783 9.34783C11.4635 9.34783 10.4903 9.75093 9.77281 10.4685C9.05528 11.186 8.65217 12.1592 8.65217 13.1739ZM10.7391 13.1739C10.7391 13.6352 10.9224 14.0775 11.2485 14.4037C11.5747 14.7298 12.017 14.913 12.4783 14.913C12.9395 14.913 13.3819 14.7298 13.708 14.4037C14.0342 14.0775 14.2174 13.6352 14.2174 13.1739C14.2174 12.7127 14.0342 12.2703 13.708 11.9442C13.3819 11.618 12.9395 11.4348 12.4783 11.4348C12.017 11.4348 11.5747 11.618 11.2485 11.9442C10.9224 12.2703 10.7391 12.7127 10.7391 13.1739ZM17 8.22226C16.9999 8.34079 16.9696 8.45734 16.9118 8.56085C16.8541 8.66436 16.7708 8.7514 16.67 8.8137C16.5691 8.876 16.4541 8.9115 16.3356 8.91683C16.2172 8.92217 16.0994 8.89716 15.9934 8.84417L13.2108 7.45287C13.0952 7.39513 12.9981 7.30638 12.9301 7.19654C12.8622 7.0867 12.8262 6.96011 12.8261 6.83095V4.21252C12.8262 4.08336 12.8622 3.95678 12.9301 3.84694C12.9981 3.7371 13.0952 3.64834 13.2108 3.59061L15.9934 2.1993C16.0994 2.14632 16.2172 2.12131 16.3356 2.12664C16.4541 2.13197 16.5691 2.16747 16.67 2.22978C16.7708 2.29208 16.8541 2.37911 16.9118 2.48262C16.9696 2.58613 16.9999 2.70268 17 2.82121V8.22226Z" stroke={props.stroke} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

export const CloseIcon: React.FC<IconProps> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="currentColor" className={`bi bi-x-sm ${props.classes ? props.classes : ""}`} viewBox="0 0 16 16" onClick={props.onClick}>
        <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" stroke={props.stroke} onClick={props.onClick}/>
    </svg>
);

export const InfoIcon: React.FC<IconProps> = (props) => (
    <div className={props.classes} title={props.title}>
        <svg width="14" height="14" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 9V13.3077M17 9C17 13.4183 13.4183 17 9 17C4.58172 17 1 13.4183 1 9C1 4.58172 4.58172 1 9 1C13.4183 1 17 4.58172 17 9ZM9.61539 5.92308C9.61539 6.26295 9.33987 6.53846 9 6.53846C8.66013 6.53846 8.38462 6.26295 8.38462 5.92308C8.38462 5.58321 8.66013 5.30769 9 5.30769C9.33987 5.30769 9.61539 5.58321 9.61539 5.92308Z" stroke={props.stroke} strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    </div>
);

export const UploadIcon: React.FC<IconProps> = (props) => (
    <svg width="18" height="18" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg" >
        <path d="M1 13.3081V14.5385C0.999895 14.8617 1.06349 15.1819 1.18716 15.4806C1.31083 15.7793 1.49215 16.0507 1.72075 16.2793C1.94935 16.5079 2.22078 16.6892 2.51948 16.8129C2.81819 16.9366 3.13833 17.0002 3.46162 17.0001H14.5384C14.8617 17.0002 15.1818 16.9366 15.4805 16.8129C15.7792 16.6892 16.0506 16.5079 16.2792 16.2793C16.5078 16.0507 16.6892 15.7793 16.8128 15.4806C16.9365 15.1819 17.0001 14.8617 17 14.5385V13.3081M5.30801 5.30805L9 1.00005M9 1.00005L12.692 5.30805M9 1.00005V12.0769" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
    </svg>
);

export const SettingsIcon: React.FC<IconProps> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 25 25" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-settings">
        <circle cx="12" cy="12" r="3"></circle>
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
    </svg>
);

export const PaperClipIcon: React.FC<IconProps> = (props) => (
    <div className={props.classes} title={props.title}>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={props.stroke} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-paperclip">
            <path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48" stroke={props.stroke}></path>
        </svg>
    </div>
);