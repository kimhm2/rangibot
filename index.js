const Discord = require("discord.js");

const client = new Discord.Client();
const pre = "/한다"

//내일 만들것 하나의 역할만 사용가능 재밌으면 노래기능추가
//여러기능

client.on('message', message => {
    //채팅메시지
    const msg = message.content.toLowerCase();
    //채팅 작성자 아이디
    const user_id=message.author.id;

    //역할명으로 역할정보 조회
    let role =  message.guild.roles.find('name', msg);

    if(role!=null){
      //채팅작성자 역할정보
      const totalRoles= message.member._roles;
      //역할갯수
      const ttrlangth=totalRoles.length;
      //모든역할 제거
       for(i=0; i<ttrlangth ;i++){

       message.guild.member(user_id).removeRole(totalRoles[0]);

     }
     //입력한 역할추가
      message.guild.member(user_id).addRole(role.id);
      message.reply(role.name +' 으로 변경 되었습니다.');

    }

});

client.login("NjA4MzE1NTY4Njc5ODEzMTQx.XUrciw.TGvzDZ0UoHOhOfG6aXcntlnk2eA");
