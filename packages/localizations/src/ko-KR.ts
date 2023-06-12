import type { LocalizationResource } from '@clerk/types';

const commonTexts = {
  signIn: {
    phoneCode: {
      title: '휴대폰 확인',
      subtitle: '{{applicationName}}으로 계속 진행하려면',
      formTitle: '인증 코드',
      formSubtitle: '휴대폰 번호로 전송된 인증 코드를 입력하세요',
      resendButton: '코드 다시 보내기',
    },
  },
} as const;

export const koKR: LocalizationResource = {
  locale: 'ko-KR',
  socialButtonsBlockButton: '{{provider|titleize}}로 계속 진행하기',
  dividerText: '또는',
  formFieldLabel__emailAddress: '이메일 주소',
  formFieldLabel__emailAddresses: '이메일 주소',
  formFieldLabel__phoneNumber: '휴대폰 번호',
  formFieldLabel__username: '사용자 이름',
  formFieldLabel__emailAddress_phoneNumber: '이메일 주소 혹은 휴대폰 번호',
  formFieldLabel__emailAddress_username: '이메일 주소 혹은 사용자 이름',
  formFieldLabel__phoneNumber_username: '휴대폰 번호 혹은 사용자 이름',
  formFieldLabel__emailAddress_phoneNumber_username: '이메일 주소, 휴대폰 번호 혹은 사용자 이름',
  formFieldLabel__password: '비밀번호',
  formFieldLabel__currentPassword: '현재 비밀번호',
  formFieldLabel__newPassword: '새 비밀번호',
  formFieldLabel__confirmPassword: '비밀번호 확인',
  formFieldLabel__signOutOfOtherSessions: '다른 모든 기기에서 로그아웃',
  formFieldLabel__firstName: '이름',
  formFieldLabel__lastName: '성',
  formFieldLabel__backupCode: '백업 코드',
  formFieldLabel__organizationName: '조직이름',
  formFieldLabel__organizationSlug: '슬러그 주소',
  formFieldLabel__role: '역할',
  formFieldInputPlaceholder__emailAddress: '',
  formFieldInputPlaceholder__emailAddresses:
    '하나 이상의 이메일 주소를 공백 또는 쉼표로 구분하여 입력하거나 붙여넣습니다',
  formFieldInputPlaceholder__phoneNumber: '',
  formFieldInputPlaceholder__username: '',
  formFieldInputPlaceholder__emailAddress_phoneNumber: '',
  formFieldInputPlaceholder__emailAddress_username: '',
  formFieldInputPlaceholder__phoneNumber_username: '',
  formFieldInputPlaceholder__emailAddress_phoneNumber_username: '',
  formFieldInputPlaceholder__password: '',
  formFieldInputPlaceholder__firstName: '',
  formFieldInputPlaceholder__lastName: '',
  formFieldInputPlaceholder__backupCode: '',
  formFieldInputPlaceholder__organizationName: '',
  formFieldInputPlaceholder__organizationSlug: '',
  formFieldError__notMatchingPasswords: `비밀번호가 일치하지 않습니다.`,
  formFieldError__matchingPasswords: '비밀번호가 일치합니다.',
  formFieldAction__forgotPassword: '비밀번호를 잊으셨나요?',
  formFieldHintText__optional: '선택사항',
  formButtonPrimary: '계속',
  signInEnterPasswordTitle: '비밀번호를 입력하세요',
  backButton: '뒤로가기',
  footerActionLink__useAnotherMethod: '다른 방법 사용하기',
  badge__primary: '기본',
  badge__thisDevice: '이 장치',
  badge__userDevice: '사용자 장치',
  badge__otherImpersonatorDevice: '기타 사칭 장치',
  badge__default: '기본값',
  badge__unverified: '미확인',
  badge__requiresAction: '조치 필요',
  badge__you: '당신',
  footerPageLink__help: '도움',
  footerPageLink__privacy: '개인정보 보호',
  footerPageLink__terms: '약관',
  paginationButton__previous: '이전',
  paginationButton__next: '다음',
  paginationRowText__displaying: '표시중',
  paginationRowText__of: '의',
  membershipRole__admin: '관리자',
  membershipRole__basicMember: '멤버',
  membershipRole__guestMember: '게스트',
  signUp: {
    start: {
      title: '계정 만들기',
      subtitle: '계속하려면 {{applicationName}}을 클릭합니다.',
      actionText: '계정이 있으신가요?',
      actionLink: '로그인하기',
    },
    emailLink: {
      title: '이메일 인증하기',
      subtitle: '계속하려면 {{applicationName}}을 클릭합니다.',
      formTitle: '인증 링크',
      formSubtitle: '이메일 주소로 전송된 인증 링크를 사용합니다.',
      resendButton: '링크 재전송',
      verified: {
        title: '성공적으로 가입에 성공했습니다',
      },
      loading: {
        title: '가입 중...',
      },
      verifiedSwitchTab: {
        title: '이메일 인증 성공',
        subtitle: '계속하려면 새로 연 탭으로 돌아가기',
        subtitleNewTab: '계속하려면 이전 탭으로 돌아가기',
      },
    },
    emailCode: {
      title: '이메일 인증하기',
      subtitle: '계속하려면 {{applicationName}}을 클릭합니다.',
      formTitle: '인증 코드',
      formSubtitle: '이메일 주소로 전송된 인증 코드를 입력하세요',
      resendButton: '코드 재전송',
    },
    phoneCode: {
      title: '휴대폰 번호 인증',
      subtitle: '계속하려면 {{applicationName}}을 클릭합니다.',
      formTitle: '인증 코드',
      formSubtitle: '휴대폰 번호로 전송된 인증 코드를 입력합니다',
      resendButton: '코드 재전송',
    },
    continue: {
      title: '누락된 필드를 입력하세요',
      subtitle: '계속하려면 {{applicationName}}을 클릭합니다.',
      actionText: '계정이 있으신가요?',
      actionLink: '로그인',
    },
  },
  signIn: {
    start: {
      title: '회원가입',
      subtitle: '계속하려면 {{applicationName}}을 클릭합니다.',
      actionText: '계정이 없으신가요?',
      actionLink: '회원가입',
      actionLink__use_email: '이메일 사용하기',
      actionLink__use_phone: '휴대폰 번호 사용하기',
      actionLink__use_username: '사용자 이름 사용하기',
      actionLink__use_email_username: '이메일 또는 사용자 이름 사용하기',
    },
    password: {
      title: '비밀번호를 입력하세요',
      subtitle: '계속하려면 {{applicationName}}을 클릭합니다.',
      actionLink: '다른 방법 사용하기',
    },
    forgotPasswordAlternativeMethods: {
      title: '비밀번호를 잊으셨나요?',
      label__alternativeMethods: '또는 다른 방법으로 로그인.',
      blockButton__resetPassword: '비밀번호 재설정',
    },
    forgotPassword: {
      title_email: '이메일을 확안하세요',
      title_phone: '휴대폰 번호를 확인하세요',
      subtitle: '비밀번호를 재설정하려면',
      formTitle: '비밀번호 재설정 코드',
      formSubtitle_email: '이메일 주소로 전송된 코드를 입력합니다',
      formSubtitle_phone: '휴대폰 번호로 전송된 코드를 입력합니다.',
      resendButton: '코드 재전송',
    },
    resetPassword: {
      title: '비밀번호 재설정',
      formButtonPrimary: '비밀번호 재설정',
      successMessage: '비밀번호가 성공적으로 변경되었습니다. 로그인하는 중입니다. 잠시만 기다려주세요.',
    },
    resetPasswordMfa: {
      detailsLabel: '비밀번호를 재설정하기 전에 신원을 확인해야 합니다.',
    },
    emailCode: {
      title: '이메일을 확안하세요',
      subtitle: '계속하려면 {{applicationName}}을 클릭합니다',
      formTitle: '인증 코드',
      formSubtitle: '이메일 주소로 전송된 인증 코드를 입력합니다',
      resendButton: '코드 재전송',
    },
    emailLink: {
      title: '이메일을 확안하세요',
      subtitle: '계속하려면 {{applicationName}}을 클릭합니다',
      formTitle: '인증 링크',
      formSubtitle: '이메일로 전송된 인증 링크를 사용하세요.',
      resendButton: '링크 재전송',
      unusedTab: {
        title: '이 탭을 닫으셔도 됩니다',
      },
      verified: {
        title: '로그인에 성공했습니다',
        subtitle: '곧 리디렉션될 예정입니다',
      },
      verifiedSwitchTab: {
        subtitle: '계속하려면 원래 탭으로 돌아가세요',
        titleNewTab: '다른 탭에서 로그인',
        subtitleNewTab: '계속하려면 새로 연 탭으로 돌아가세요.',
      },
      loading: {
        title: '로그인중...',
        subtitle: '곧 리디렉션됩니다',
      },
      failed: {
        title: '이 인증 링크는 유효하지 않습니다',
        subtitle: '계속하려면 원래 탭으로 돌아가세요.',
      },
      expired: {
        title: '이 인증 링크가 만료되었습니다',
        subtitle: '계속하려면 원래 탭으로 돌아가세요.',
      },
    },
    phoneCode: { ...commonTexts.signIn.phoneCode },
    phoneCodeMfa: { ...commonTexts.signIn.phoneCode, subtitle: '' },
    totpMfa: {
      title: '2단계 인증',
      subtitle: '',
      formTitle: '인증 코드',
      formSubtitle: '인증 앱에서 생성한 인증 코드를 입력합니다',
    },
    backupCodeMfa: {
      title: '백업 코드 입력',
      subtitle: '계속하려면 원래 탭으로 돌아가세요',
      formTitle: '',
      formSubtitle: '',
    },
    alternativeMethods: {
      title: '다른 방법 사용하기',
      actionLink: '도움 요청하기',
      blockButton__emailLink: '{{identifier}}로 이메일 링크 보내기',
      blockButton__emailCode: '{{identifier}}로 이메일 코드 보내기',
      blockButton__phoneCode: '{{identifier}} 로 SMS 코드 보내기',
      blockButton__password: '비밀번호로 로그인',
      blockButton__totp: '인증 앱 사용하기',
      blockButton__backupCode: '백업 코드 사용하기',
      getHelp: {
        title: '도움 요청하기',
        content: '계정에 로그인하는 데 문제가 있는 경우 이메일을 보내주시면 최대한 빨리 액세스를 복구해 드리겠습니다.',
        blockButton__emailSupport: '이메일 지원',
      },
    },
    noAvailableMethods: {
      title: '로그인할 수 없습니다',
      subtitle: '오류가 발생했습니다',
      message: '로그인을 계속할 수 없습니다. 사용 가능한 인증 방법이 없습니다.',
    },
  },
  userProfile: {
    mobileButton__menu: '메뉴',
    formButtonPrimary__continue: '계속',
    formButtonPrimary__finish: '완료',
    formButtonReset: '취소',
    start: {
      headerTitle__account: '계정',
      headerTitle__security: '보안',
      headerSubtitle__account: '계정 정보 관리',
      headerSubtitle__security: '보안 환경설정 관리',
      profileSection: {
        title: '프로필',
      },
      usernameSection: {
        title: '사용자 이름',
        primaryButton__changeUsername: '사용자 이름 변경',
        primaryButton__setUsername: '사용자 이름 설정',
      },
      emailAddressesSection: {
        title: '이메일 주소',
        primaryButton: '이메일 주소 추가',
        detailsTitle__primary: '기본 이메일 주소',
        detailsSubtitle__primary: '이 이메일 주소는 기본 이메일 주소입니다',
        detailsAction__primary: '인증 완료',
        detailsTitle__nonPrimary: '기본 이메일 주소로 설정',
        detailsSubtitle__nonPrimary: '이 이메일 주소를 계정 관련 커뮤니케이션을 수신할 기본 이메일 주소로 설정하세요.',
        detailsAction__nonPrimary: '기본으로 설정',
        detailsTitle__unverified: '확인되지 않은 이메일 주소',
        detailsSubtitle__unverified: '이 이메일 주소는 확인되지 않았으며 기능이 제한될 수 있습니다',
        detailsAction__unverified: '인증 완료',
        destructiveActionTitle: '제거',
        destructiveActionSubtitle: '이 이메일 주소를 삭제하고 계정에서 제거하세요',
        destructiveAction: '이메일 주소 제거',
      },
      phoneNumbersSection: {
        title: '휴대폰 번호',
        primaryButton: '휴대폰 번호 추가',
        detailsTitle__primary: '기본 휴대폰 번호',
        detailsSubtitle__primary: '이 휴대폰 번호는 기본 휴대폰 번호 입니다',
        detailsAction__primary: '인증 완료',
        detailsTitle__nonPrimary: '기본 휴대폰 번호로 설정하기',
        detailsSubtitle__nonPrimary: '이 휴대폰 번호를 계정 관련 커뮤니케이션을 수신할 기본 휴대폰 번호로 설정하세요.',
        detailsAction__nonPrimary: '기본으로 설정',
        detailsTitle__unverified: '확인되지 않은 휴대폰 번호',
        detailsSubtitle__unverified: '이 휴대폰 번호는 확인되지 않았으며 기능이 제한될 수 있습니다',
        detailsAction__unverified: '인증 완료',
        destructiveActionTitle: '제거',
        destructiveActionSubtitle: '이 휴대폰 번호를 삭제하고 계정에서 제거하세요',
        destructiveAction: '휴대폰 번호 제거',
      },
      connectedAccountsSection: {
        title: '연결된 계정',
        primaryButton: '계정 연결하기',
        title__conectionFailed: '연결 실패 재시도',
        title__connectionFailed: '연결 실패 재시도',
        title__reauthorize: '재인증 필요',
        subtitle__reauthorize:
          '필수 범위가 업데이트되어 기능이 제한될 수 있습니다. 문제를 방지하려면 이 애플리케이션을 다시 승인하세요',
        actionLabel__conectionFailed: '재시도',
        actionLabel__connectionFailed: '재시도',
        actionLabel__reauthorize: '지금 인증하기',
        destructiveActionTitle: '제거',
        destructiveActionSubtitle: '계정에서 이 연결된 계정을 삭제합니다',
        destructiveActionAccordionSubtitle: '연결된 계정 제거',
      },
      enterpriseAccountsSection: {
        title: '기업 계정',
      },
      passwordSection: {
        title: '비밀번호',
        primaryButton__changePassword: '비밀번호 변경',
        primaryButton__setPassword: '비밀번호 설정',
      },
      mfaSection: {
        title: '2단계 인증',
        primaryButton: '2단계 인증 추가',
        phoneCode: {
          destructiveActionTitle: '제거',
          destructiveActionSubtitle: '2단계 인증 방법에서 이 휴대폰 번호를 제거합니다',
          destructiveActionLabel: '휴대폰 번호 제거',
          title__default: '기본 요소',
          title__setDefault: '기본 요소로 설정',
          subtitle__default: '이 요소는 로그인할 때 기본 2단계 인증 방법으로 사용됩니다.',
          subtitle__setDefault: '이 요소를 기본 요소로 설정하여 로그인 시 기본 2단계 인증 방법으로 사용하세요.',
          actionLabel__setDefault: '기본으로 설정',
        },
        backupCodes: {
          headerTitle: '백업 코드',
          title__regenerate: '백업 코드 재생성',
          subtitle__regenerate: '새로운 보안 백업 코드 세트를 받으세요. 이전 백업 코드는 삭제되며 사용할 수 없습니다.',
          actionLabel__regenerate: '코드 재생성',
        },
        totp: {
          headerTitle: '인증 애플리케이션',
          title: '기본 요소',
          subtitle: '이 요소는 로그인할 때 기본 2단계 인증 방법으로 사용됩니다.',
          destructiveActionTitle: '제거',
          destructiveActionSubtitle: '2단계 인증 방법에서 인증 애플리케이션을 제거합니다',
          destructiveActionLabel: '인증 어플리케이션 제거',
        },
      },
      activeDevicesSection: {
        title: '활성화된 장치',
        primaryButton: '활성화된 장치',
        detailsTitle: '현재 장치',
        detailsSubtitle: '현재 사용 중인 장치입니다.',
        destructiveActionTitle: '로그아웃',
        destructiveActionSubtitle: '이 기기에서 계정 로그아웃',
        destructiveAction: '이 장치에서 로그아웃',
      },
      web3WalletsSection: {
        title: 'Web3 지갑',
        primaryButton: 'Web3 지갑',
        destructiveActionTitle: '제거',
        destructiveActionSubtitle: '이 web3 지갑을 계정에서 삭제',
        destructiveAction: '지갑 제거',
      },
    },
    profilePage: {
      title: '프로필 업데이트',
      imageFormTitle: '프로필 이미지',
      imageFormSubtitle: '이미지 업로드',
      imageFormDestructiveActionSubtitle: '이미지 제거',
      fileDropAreaTitle: '이미지를 이곳에 드래그 하세요 또는...',
      fileDropAreaAction: '파일 선택',
      fileDropAreaHint: '10MB보다 작은 JPG, PNG, GIF 또는 WEBP 이미지를 업로드합니다',
      successMessage: '프로필이 업데이트되었습니다.',
    },
    usernamePage: {
      title: '사용자 이름 업데이트',
      successMessage: '당신읭 사용자 이름이 업데이트되었습니다.',
    },
    emailAddressPage: {
      title: '이메일 주소 추가',
      emailCode: {
        formHint: '이 이메일 주소로 인증 코드가 포함된 이메일이 전송됩니다.',
        formTitle: '인증 코드',
        formSubtitle: '{{identifier}}에게 전송된 인증 코드를 입력합니다',
        resendButton: '코드 재전송',
        successMessage: '이메일 {{identifier}} 가 당의 계정에 추가되었습니다.',
      },
      emailLink: {
        formHint: '인증 링크가 포함된 이메일이 이 이메일 주소로 전송됩니다.',
        formTitle: '인증 링크',
        formSubtitle: '{{identifier}}에게 전송된 이메일의 링크를 클릭합니다.',
        resendButton: '링크 재전송',
        successMessage: '{{identifier}} 이메일이 당신의 계정에 추가되었습니다.',
      },
      removeResource: {
        title: '이메일 제거',
        messageLine1: '{{identifier}}가 이 계정에서 제거 될 에정입니다.',
        messageLine2: '더 이상 이 이메일 주소로 로그인할 수 없습니다.',
        successMessage: '{{emailAddress}} 이메일이 당신의 계정에서 삭제되었습니다',
      },
    },
    phoneNumberPage: {
      title: '휴대폰 번호 추가',
      successMessage: '{{identifier}} 가 당신의 계정에 추가되었습니다.',
      infoText: '인증 링크가 포함된 문자 메시지가 이 휴대폰 번호로 전송됩니다.',
      infoText__secondary: '메시지 및 데이터 요금이 적용될 수 있습니다.',
      removeResource: {
        title: '휴대폰 번호 제거',
        messageLine1: '{{identifier}}가 당신의 계정에서 제거 될 예정입니다.',
        messageLine2: '더 이상 이 휴대폰 번호로 로그인할 수 없습니다.',
        successMessage: '{{phoneNumber}}가 당신의 계정에서 제거되었습니다.',
      },
    },
    connectedAccountPage: {
      title: '연결된 계정 추가하기',
      formHint: '계정을 연결할 제공자를 선택하세요',
      formHint__noAccounts: '사용 가능한 외부 계정 제공자가 없습니다.',
      socialButtonsBlockButton: '{{provider|titleize}} 계정 연결',
      successMessage: '이 제공자가 계정에 추가되었습니다.',
      removeResource: {
        title: '연결된 계정 제거',
        messageLine1: '{{identifier}}가 이 계정에서 제거 될 예정입니다.',
        messageLine2: '이 연결된 계정을 더 이상 사용할 수 없으며 종속된 모든 기능이 더 이상 작동하지 않습니다.',
        successMessage: '{{connectedAccount}}가 당신의 계정에서 제거되었습니다.',
      },
    },
    web3WalletPage: {
      title: 'web3 지갑 추가',
      subtitle__availableWallets: '계정에 연결할 web3 지갑을 선택하세요.',
      subtitle__unavailableWallets: '사용 가능한 web3 지갑이 없습니다.',
      successMessage: '지갑이 계정에 추가되었습니다ß.',
      removeResource: {
        title: 'web3 지갑 제거',
        messageLine1: '{{identifier}}가 이 계정에서 제거 될 예정입니다.',
        messageLine2: '더 이상 이 web3 지갑을 사용하여 로그인할 수 없습니다.',
        successMessage: '{{web3Wallet}}가 당신의 계정에서 제거되었습니다.',
      },
    },
    passwordPage: {
      title: '비밀번호 설정',
      changePasswordTitle: '비밀번호 변경',
      successMessage: '비밀번호가 설정되었습니다.',
      changePasswordSuccessMessage: '비밀번호가 업데이트되었습니다.',
      sessionsSignedOutSuccessMessage: '다른 모든 기기는 로그아웃되었습니다.',
    },
    mfaPage: {
      title: '2단계 인증 추가',
      formHint: '추가할 방법을 선택합니다.',
    },
    mfaTOTPPage: {
      title: '인증 애플리케이션 추가',
      verifyTitle: '인증 코드',
      verifySubtitle: '인증자가 생성한 인증 코드를 입력합니다',
      successMessage:
        '이제 2단계 인증이 활성화되었습니다. 로그인할 때 추가 단계로 이 인증자의 인증 코드를 입력해야 합니다.',
      authenticatorApp: {
        infoText__ableToScan: '인증 앱에서 새 로그인 방법을 설정하고 다음 QR 코드를 스캔하여 계정에 연결합니다.',
        infoText__unableToScan: '인증 장치에서 새 로그인 방법을 설정하고 아래에 제공된 키를 입력합니다.',
        inputLabel__unableToScan1:
          '시간 기반 또는 일회용 비밀번호가 사용 설정되어 있는지 확인한 다음 계정 연결을 완료합니다.',
        inputLabel__unableToScan2: '또는 인증자가 TOTP URI를 지원하는 경우 전체 URI를 복사할 수도 있습니다.',
        buttonAbleToScan__nonPrimary: '대신 QR 코드 스캔 하세요',
        buttonUnableToScan__nonPrimary: 'QR 코드를 스캔할 수 없나요?',
      },
      removeResource: {
        title: '2단계 인증 제거',
        messageLine1: '로그인할 때 더 이상 이 인증자의 인증 코드가 필요하지 않습니다.',
        messageLine2: '계정이 안전하지 않을 수 있습니다. 계속 진행하시겠습니까?',
        successMessage: '인증자 애플리케이션을 통한 2단계 인증이 제거되었습니다.',
      },
    },
    mfaPhoneCodePage: {
      title: 'SMS 코드 인증 추가',
      primaryButton__addPhoneNumber: '휴대폰 번호 추가',
      subtitle__availablePhoneNumbers: 'SMS 코드 2단계 인증을 위해 등록할 휴대폰 번호를 선택하세요.',
      subtitle__unavailablePhoneNumbers: 'SMS 코드 2단계 인증에 등록할 수 있는 휴대폰 번호가 없습니다.',
      successMessage:
        '이제 이 휴대폰 번호에 대해 SMS 코드 2단계 인증이 활성화되었습니다. 로그인할 때 추가 단계로 이 휴대폰 번호로 전송된 인증 코드를 입력해야 합니다.',
      removeResource: {
        title: '2단계 인증 제거',
        messageLine1: '{{identifier}}는 로그인할 때 더 이상 인증 코드를 받지 않습니다.',
        messageLine2: '계정이 안전하지 않을 수 있습니다. 계속하시겠습니까?',
        successMessage: '{{mfaPhoneCode}}에 대한 SMS 코드 2단계 인증이 제거되었습니다',
      },
    },
    backupCodePage: {
      title: '백업 코드 인증 추가',
      title__codelist: '백업 코드',
      subtitle__codelist: '안전하게 저장하고 비밀로 유지하세요.',
      infoText1: '이 계정에 대해 백업 코드가 활성화됩니다.',
      infoText2:
        '백업 코드를 비밀로 유지하고 안전하게 보관하세요. 백업 코드가 손상된 것으로 의심되는 경우 백업 코드를 다시 생성할 수 있습니다.',
      successSubtitle: '인증 장치에 액세스할 수 없는 경우 이 중 하나를 사용하여 계정에 로그인할 수 있습니다.',
      successMessage:
        '이제 백업 코드가 활성화되었습니다. 인증 장치에 액세스할 수 없는 경우 이 중 하나를 사용하여 계정에 로그인할 수 있습니다. 각 코드는 한 번만 사용할 수 있습니다.',
      actionLabel__copy: '전체 복사',
      actionLabel__copied: '복사 완료!',
      actionLabel__download: '.txt 다운로드',
      actionLabel__print: '인쇄',
    },
  },
  userButton: {
    action__manageAccount: '계정 관리',
    action__signOut: '로그아웃',
    action__signOutAll: '모든 계정에서 로그아웃',
    action__addAccount: '계정 추가',
  },
  organizationSwitcher: {
    personalWorkspace: '개인 워크스페이스',
    notSelected: '선택한 조직 없음',
    action__createOrganization: '조직 만들기',
    action__manageOrganization: '조직 관리',
  },
  impersonationFab: {
    title: '{{identifier}}로 로그인했습니다',
    action__signOut: '로그아웃',
  },
  organizationProfile: {
    start: {
      headerTitle__members: '멤버',
      headerTitle__settings: '설정',
      headerSubtitle__members: '조직 구성원 보기 및 관리',
      headerSubtitle__settings: '조직 설정 관리',
    },
    profilePage: {
      title: '조직 프로필',
      subtitle: '조직 프로필 관리',
      successMessage: '조직이 업데이트되었습니다.',
      dangerSection: {
        title: '위험',
        leaveOrganization: {
          title: '조직 떠나기',
          messageLine1: '이 조직을 탈퇴하시겠습니까? 이 조직 및 해당 애플리케이션에 대한 액세스 권한을 잃게됩니다.',
          messageLine2: '이 작업은 영구적이며 되돌릴 수 없습니다',
          successMessage: '조직을 탈퇴했습니다.',
        },
      },
    },
    invitePage: {
      title: '회원 초대',
      subtitle: '이 조직에 새 멤버 초대',
      successMessage: '초대가 성공적으로 전송되었습니다',
      detailsTitle__inviteFailed: '초대를 보낼 수 없습니다. 다음을 수정하고 다시 시도하세요:',
      formButtonPrimary__continue: '초대 보내기',
    },
    membersPage: {
      detailsTitle__emptyRow: '표시할 멤버 없음',
      action__invite: '초대',
      start: {
        headerTitle__active: '활성',
        headerTitle__invited: '초대됨',
      },
      activeMembersTab: {
        tableHeader__user: '사용자',
        tableHeader__joined: '가입됨',
        tableHeader__role: '역할',
        tableHeader__actions: '',
        menuAction__remove: '회원 제거',
      },
      invitedMembersTab: {
        tableHeader__invited: '초대됨',
        menuAction__revoke: '초대 취소',
      },
    },
  },
  createOrganization: {
    title: '조직 만들기',
    formButtonSubmit: '조직 만들기',
    subtitle: '조직 프로필 설정',
    invitePage: {
      formButtonReset: '넘기기',
    },
  },
  unstable__errors: {
    form_identifier_not_found: '',
    form_password_pwned: '이 비밀번호는 유출사항이 발견되어 사용할 수 없으므로 대신 다른 비밀번호를 사용해 보세요.',
    form_username_invalid_length: '',
    form_param_format_invalid: '',
    form_password_length_too_short: '',
    form_param_nil: '',
    form_code_incorrect: '',
    form_password_incorrect: '',
    not_allowed_access: '',
    form_identifier_exists: '',
    form_password_validation_failed: '잘못된 비밀번호',
    form_password_not_strong_enough: '비밀번호가 충분히 안전하지 않습니다.',
    form_password_size_in_bytes_exceeded:
      '비밀번호가 허용되는 최대 바이트 수를 초과했습니다. 비밀번호를 줄이거나 일부 특수 문자를 제거해 주세요.',
    passwordComplexity: {
      sentencePrefix: '당신의 비밀번호는 반드시 포함해야합니다.',
      minimumLength: '{{length}} 또는 그이샹의 문자열',
      maximumLength: '{{length}} 보다 짧은 문자열',
      requireNumbers: '숫자',
      requireLowercase: '소문자',
      requireUppercase: '대문자',
      requireSpecialCharacter: '특수문자',
    },
    zxcvbn: {
      notEnough: '비밀번호가 충분히 안전하지 않습니다.',
      couldBeStronger: '비밀번호는 작동하지만 더 강력할 수 있습니다. 문자를 더 추가해 보세요.',
      goodPassword: '수고하셨습니다. 훌륭한 비밀번호입니다.',
      warnings: {
        straightRow: '같은 줄에 위치한 키보드를 사용하는 것은 추측하기 쉽습니다.',
        keyPattern: '짧은 패턴은 추측하기 쉽습니다.',
        simpleRepeat: '"aaa"와 같이 반복되는 문자는 쉽게 추측할 수 있습니다.',
        extendedRepeat: '"abcabcabc"와 같이 반복되는 문자 패턴은 쉽게 추측할 수 있습니다.',
        sequences: '"abc"와 같은 일반적인 문자 시퀀스는 쉽게 추측할 수 있습니다.',
        recentYears: '최근연도는 쉽게 추측할 수 있습니다.',
        dates: '날짜는 쉽게 추측할 수 있습니다.',
        topTen: '아주 많이 사용되는 비밀번호입니다.',
        topHundred: '자주 사용되는 비밀번호입니다.',
        common: '일반적으로 사용되는 비밀번호입니다.',
        similarToCommon: '일반적으로 사용되는 비밀번호와 유사합니다.',
        wordByItself: '한 단어는 쉽게 추측할 수 있습니다.',
        namesByThemselves: '단일 이름이나 성은 추측하기 쉽습니다.',
        commonNames: '일반적인 이름과 성은 추측하기 쉽습니다.',
        userInputs: '개인 정보나 페이지 관련 데이터가 없어야 합니다.',
        pwned: '인터넷에서 데이터 유출로 인해 비밀번호가 노출되었습니다.',
      },
      suggestions: {
        l33t: "'a'에서 '@'와 같이 예측 가능한 문자 대체를 피하세요.",
        reverseWords: '일반적인 단어의 철자를 거꾸로 쓰지 마세요.',
        allUppercase: '모든 문자가 아닌 일부 문자를 대문자로 표시합니다.',
        capitalization: '한 글자 이상을 대문자로 표기하세요.',
        dates: '자신과 관련된 날짜와 연도는 피하세요.',
        recentYears: '최근 연도는 피하세요.',
        associatedYears: '귀하와 연관된 연도는 피하세요.',
        sequences: '일반적인 문자 시퀀스를 피하세요.',
        repeated: '반복되는 단어와 문자를 피하세요.',
        longerKeyboardPattern: '더 긴 키보드 패턴을 사용하고 타이핑 방향을 여러 번 변경합니다.',
        anotherWord: '덜 일반적인 단어를 더 추가합니다.',
        useWords: '여러 단어를 사용하되 일반적인 문구는 피하세요.',
        noNeed: '기호, 숫자 또는 대문자를 사용하지 않고도 강력한 비밀번호를 만들 수 있습니다.',
        pwned: '이 비밀번호를 다른 곳에서 사용하는 경우 변경해야 합니다.',
      },
    },
  },
  dates: {
    previous6Days: "지난 {{ date | weekday('ko-KR','long') }} {{ date | timeString('ko-KR') }}",
    lastDay: "어제 {{ date | timeString('ko-KR') }}",
    sameDay: "오늘 {{ date | timeString('ko-KR') }}",
    nextDay: "내일 {{ date | timeString('ko-KR') }}",
    next6Days: "다음 {{ date | weekday('ko-KR','long') }} {{ date | timeString('ko-KR') }}",
    numeric: "{{ date | numeric('ko-KR') }}",
  },
} as const;