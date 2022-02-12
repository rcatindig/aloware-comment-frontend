import logo from './logo.svg';
import './App.css';
import './custom.css';
import {Header, Footer, Content, BlogContainer, PostDetails, CommentSection, RightContainer, AboutMe, PopularPost, FollowMe} from './components'

function App() {
  return (
    <>
		<Header title="Reynard Blog"/>
		<Content>
			<BlogContainer>

					<PostDetails
						title="Turn more leads into deals with Aloware"
						datePost="Dec 7, 2017"
						contentImage="https://aloware.com/wp-content/uploads/2020/07/Aloware-Logo-Dark.png"
						>

						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
						<p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>

					</PostDetails>
					<CommentSection
						title="Comments"
						/>


			</BlogContainer>

			<RightContainer>

				<AboutMe />

				<FollowMe />

			</RightContainer>

      </Content>


        <Footer title="Exam in Aloware"/>
    </>
  );
}

export default App;
