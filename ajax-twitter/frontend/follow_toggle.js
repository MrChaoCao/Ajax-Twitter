class FollowToggle {

  constructor(el){
    this.$el = $(el);
    this.userId = this.$el.data('user-id');
    this.followState = this.$el.data('initial-follow-state');

    this.render();
    this.$el.click(this.handleClick.bind(this));
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

  handleClick(){
    event.preventDefault();

    if (this.followState === 'unfollowed') {
      $.ajax({
        url: `/users/${this.userId}/follow`,
        type: 'POST',
        dataType: 'json',
        success(){
          this.followstate = 'followed';
          this.render();
        },
      });
    } else{
      $.ajax({
        url: `/users/${this.userId}/follow`,
        type: 'DELETE',
        dataType: 'json',
        success(){
          this.followState = 'unfollowed';
          this.render();
        },
      });
    }
  }
}

module.exports = FollowToggle;
