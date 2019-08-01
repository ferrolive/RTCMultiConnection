// lang.js

var isoLangs = {
  "en":{
    "name":"English",
    "code":"en"
  },
  "ja":{
    "name":"Japanese",
    "code":"ja"
  },
  "ko":{
    "name":"Korean",
    "code":"ko"
  },
  "zh":{
    "name":"Chinese",
    "code":"zh"
  },
  "zh-tw":{
    "name":"Chinese",
    "code":"zh-tw"
  },
  "it":{
    "name":"Italian",
    "code":"it"
  },
  "es":{
    "name":"Spanish",
    "code":"es"
  },
  "de":{
    "name":"German",
    "code":"de"
  },
  "ru":{
    "name":"Russian",
    "code":"ru"
  }
};
  
var getLanguageName = function(key) {
  key = key.slice(0,2);
  var lang = isoLangs[key];
  return lang ? lang.code : undefined;
}

function Language(lang)
{
    var __construct = function() {
        if (eval('typeof ' + lang) == 'undefined')
        {
            lang = "en";
        }
        return;
    }()

    this.getStr = function(str, defaultStr) {
        var retStr = eval('eval(lang).' + str);
        if (typeof retStr != 'undefined')
        {
            return retStr;
        } else {
            if (typeof defaultStr != 'undefined')
            {
                return defaultStr;
            } else {
                return eval('en.' + str);
            }
        }
    }
}

var en = {
    CallVideo:"Call with Video",
    CallAudio:"Call with Audio Only",
    EndCall:"End Call",
    EnterTextChat:"Enter Text Chat",
    ShareFile:"Share File",
    LeaveRoom:"End Call",
    NoOneOnline:"No other participants online",
    OnlineNow:" is online now.",
    InvalidToken:"The token seems expired or invalid."
};

var ja = {
    CallVideo:"ビデオで通話",
    CallAudio:"音声のみで通話",
    EndCall:"通話終了",
    EnterTextChat:"テキストチャットに入る",
    ShareFile:"ファイル共有",
    LeaveRoom:"部屋を出る/閉じる",
    NoOneOnline:"他の参加者はオンラインにいません",
    OnlineNow:"現在オンラインです。",
    InvalidToken:"トークンは期限切れか無効です。"
};

var ko = {
    CallVideo:"비디오와 통화",
    CallAudio:"오디오 전용으로 통화",
    EndCall:"전화 통화 종료",
    EnterTextChat:"텍스트 채팅 입력",
    ShareFile:"파일 공유",
    LeaveRoom:"방에서 나가거나 닫습니다.",
    NoOneOnline:"온라인에 다른 참가자 없음.",
    OnlineNow:"現在オンラインです。",
    InvalidToken:"토큰이 만료되었거나 유효하지 않은 것 같습니다."
};
