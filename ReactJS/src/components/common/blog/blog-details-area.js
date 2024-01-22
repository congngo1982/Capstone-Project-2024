import { Link } from 'react-router-dom';
import useBlogs from '../../../hooks/use-blogs';
import BlogForm from '../forms/blog-form';
import BlogSidebar from './blog-sidebar';

const social_links = ['social_facebook','social_twitter','social_pinterest']

const BlogDetailsArea = ({blog}) => {
  const {blogs} = useBlogs(); 
  return (
    <>
      <section className="blog__area pt-120 pb-120">
        <div className="container">
          <div className="row">
            <div className="col-xxl-8 col-xl-8 col-lg-8">
              <div className="blog__wrapper">
                <div className="blog__text mb-40">
                  <p>Me old mucker argy-bargy  I'm telling pear shaped Jeffrey super brilliant, I excuse my French blatant gormless up the duff, cup of char up the kyver tosser cras happy days. The full monty he nicked it he legged it bum bag burke plastered arse over tit it's your round owt to do with me pardon you, on your bike mate hanky panky mush cuppa only a quid crikey Jeffrey skive off, faff about so I said what a load of rubbish blag David knees up cockup cras. Argy-bargy give us a bell wellies gosh skive off old bodge cheesed off A bit of how's your father off his nut bamboozled, bugger say I'm telling morish bleeding boot up the kyver nice one brilliant, ruddy jolly good fanny around chinwag amongst brown bread arse brolly. Horse play it's all gone to pot codswallop easy peasy mush knees up down the pub jolly good nice one tosser it's your round lurgy, I vagabond barmy off his nut only a quid so I said is gosh Charles blow off, pardon me chip shop Richard spiffing skive off bleeding get stuffed mate porkies amongst the full monty.</p>
                </div>
                <div className="blog__quote grey-bg mb-45 p-relative fix">
                  <img className="quote" src="/assets/img/blog/quote-1.png" alt="" />
                  <blockquote>
                    <p>{blog.title}</p>
                    <h4>{blog.authorName}</h4>
                  </blockquote>
                </div>
                <div className="blog__text mb-30">
                  <p>Horse play it's all gone to pot codswallop easy peasy mush knees up down the pub jolly good nice one tosser it's your round lurgy, I vagabond barmy off his nut only a quid so I said is gosh Charles blow off, pardon me chip shop Richard spiffing skive off bleeding get stuffed mate porkies amongst the full monty. Daft burke you</p>
                </div>
                <div className="blog__link mb-35">
                  <p>The little rotter bum bag a blinding shot gosh spifing butty eatonwha load of rubbish bamboozled. <a href="#"> https://educal.com/courses</a> </p>
                </div>
                <div className="blog__img w-img mb-45" >
                  <img src={blog.blogImg} alt="" />
                </div>
                <div className="blog__text mb-40">
                  <h3>Build a beautiful website with Quillow</h3>
                  <p>Some dodgy chav car boot blower starkers bonnet tickety-boo no biggie cheesed off, Oxford bloke fantastic the wireless bevvy cobblers chancer give us a bell, bleeder jolly good hanky panky do one gormless matie boy. Pear shaped my good sir I cobblers at public school quaint tickety-boo crikey bits and bobs, wellies bugger all mate golly gosh brolly matie boy fanny around chimney pot cracking goal my lady, bodge so I said spiffing posh the full monty don't get shirty with me no biggie.</p>

                  <p>Brolly grub blimey victoria sponge blag nancy boy don't get shirty with me skive off bobby burke in my flat bog-standard, easy peasy golly gosh up the duff show off show off pick your nose and blow off gosh a brilliant that what a load of rubbish.</p>
                </div>
                <div className="blog__line"></div>
                <div className="blog__meta-3 d-sm-flex justify-content-between align-items-center mb-80">
                  <div className="blog__tag-2">
                    {blog.tags.map((tag,i) => (
                    <a key={i} href="#">{tag}</a>
                    ))}
                  </div>
                  <div className="blog__social d-flex align-items-center">
                    <h4>Share:</h4>
                    <ul>
                      {social_links.map((link,i) => (
                      <li key={i}>
                        <a href="#" className={i === 0 ? 'fb' : i === 1 ? 'tw' : 'pin'} >
                          <i className={link}></i></a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="blog__author-3 d-sm-flex grey-bg mb-90">
                  <div className="blog__author-thumb-3 mr-20">
                    <img src={blog.author} alt="" />
                  </div>
                  <div className="blog__author-content">
                    <h4>{blog.authorName}</h4>
                    <span>Author</span>
                    <p>So I said blower wellies a blinding shot jolly good argy-bargy he nicked it, in my flat don't get shirty with me tosser.</p>
                  </div>
                </div>
                <div className="blog__recent mb-65">
                  <div className="section__title-wrapper mb-40">
                    <h2 className="section__title">Related <span className="yellow-bg-sm">Post <img src="/assets/img/shape/yellow-bg-4.png" alt="" />  </span></h2>
                    <p>You don't have to struggle alone, you've got our assistance and help.</p>
                  </div>
                  <div className="row">
                    {blogs.slice(0,2).map((blog,i) => (
                    <div key={i} className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                      <div className="blog__item white-bg mb-30 transition-3 fix">
                        <div className="blog__thumb w-img fix">
                          <Link to={`/blog-details/${blog.id}`}>
                            <img src={blog.blogImg} alt="" />
                          </Link>
                        </div>
                        <div className="blog__content">
                          <div className="blog__tag">
                            <a href="#" className={blog.color ? blog.color : ''}>{blog.category}</a>
                          </div>
                          <h3 className="blog__title">
                            <Link to={`/blog-details/${blog.id}`}>{blog.title}</Link>
                          </h3>

                          <div className="blog__meta d-flex align-items-center justify-content-between">
                            <div className="blog__author d-flex align-items-center">
                              <div className="blog__author-thumb mr-10">
                                <img src={blog.author} alt="" />
                              </div>
                              <div className="blog__author-info">
                                <h5>{blog.authorName}</h5>
                              </div>
                            </div>
                            <div className="blog__date d-flex align-items-center">
                              <i className="fal fa-clock"></i>
                              <span>{blog.date}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    ))}
                  </div>
                </div>
                <div className="latest-comments mb-95">
                  <h3>3 Comments</h3>
                  <ul>
                    <li>
                      <div className="comments-box grey-bg">
                        <div className="comments-info d-flex">
                          <div className="comments-avatar mr-20">
                            <img src="/assets/img/blog/comments/comment-1.jpg" alt="" />
                          </div>
                          <div className="avatar-name">
                            <h5>Eleanor Fant</h5>
                            <span className="post-meta"> July 14, 2022</span>
                          </div>
                        </div>
                        <div className="comments-text ml-65">
                          <p>So I said lurgy dropped a clanger Jeffrey bugger cuppa gosh David blatant have it, standard A bit of how's your father my lady absolutely.</p>
                          <div className="comments-replay">
                            <a href="#">Reply</a>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="children">
                      <div className="comments-box grey-bg">
                        <div className="comments-info d-flex">
                          <div className="comments-avatar mr-20">
                            <img src="/assets/img/blog/comments/comment-1.jpg" alt="" />
                          </div>
                          <div className="avatar-name">
                            <h5>Dominic</h5>
                            <span className="post-meta">April 16, 2022 </span>
                          </div>
                        </div>
                        <div className="comments-text ml-65">
                          <p>David blatant have it, standard A bit of how's your father my lady absolutely.</p>
                          <div className="comments-replay">
                            <a href="#">Reply</a>
                          </div>
                        </div>
                      </div>
                      <ul>
                        <li className="children-2">
                          <div className="comments-box grey-bg">
                            <div className="comments-info d-flex">
                              <div className="comments-avatar mr-20">
                                <img src="/assets/img/blog/comments/comment-3.jpg" alt="" />
                              </div>
                              <div className="avatar-name">
                                <h5>Von Rails</h5>
                                <span className="post-meta">April 18, 2022 </span>
                              </div>
                            </div>
                            <div className="comments-text ml-65">
                              <p>He nicked it get stuffed mate spend a penny plastered.!</p>
                              <div className="comments-replay">
                                <a href="#">Reply</a>
                              </div>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
                <div className="blog__comment">
                  <h3>Write a Review</h3>
                  {/* blog form start */}
                  <BlogForm/>
                  {/* blog form end */}
                </div>
              </div>
            </div>
            <div className="col-xxl-4 col-xl-4 col-lg-4">
              <BlogSidebar />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogDetailsArea;