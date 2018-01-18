class FollowToggle {
  // constructor(user-id, initial-follow-state){
  //   this.userId = user-id;
  //   this.followState = initial-follow-state;
  // }

  constructor(el){
    this.$el = $(el);
    this.userId = this.$el.data('user-id');
    this.followState = this.$el.data('initial-follow-state');

    this.render();
  }

    render(){
    switch(this.followState){
      case 'followed':
        this.$el.prop('disabled', false);
        this.$el.html('Unfollow!');
        break;
      case 'unfollowed':
        this.$el.prop('disabled', false);
        this.$el.html('Follow!');
        break;
      case 'following':
        this.$el.prop('disabled', true);
        this.$el.html('Following...');
        break;
      case 'unfollwing':
        this.$el.prop('disabled', true);
        this.$el.html('Unollowing...');
        break;
    }
  }

}

module.exports = FollowToggle;
